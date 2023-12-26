import React, {useEffect, useRef} from "react"
import "./index.css"
import {AdProduct, Bookshelf, GoEnd, GoStart, Like, Moon, Music, Pause, PlayOne, Search, SunOne, Terrace} from "@icon-park/react";
import {NavLink, useNavigate} from "react-router-dom";
import {Input, Modal, Tooltip} from "antd";
import axios from "axios";
import useTypewriter from "react-typewriter-hook"
import ZMBWAN from '../../assets/music/ZMBWAN.mp3'
import SX from '../../assets/music/SX.mp3'
import XTJ from '../../assets/music/XTJ.mp3'
import AN from '../../assets/music/AN.mp3'
import GC from '../../assets/music/GC.mp3'
import SLSZ from '../../assets/music/SLSZ.mp3'
import XYZHDYH from '../../assets/music/XYZHDYH.mp3'

export default function Header(props) {

    const {essayArr,changeMaskBac,changeListBac,searchEssayArr,setSearchEssayArr,ListBac} = props
    const navigate = useNavigate(); // 获取导航函数
    const [clause,setClause] = React.useState("")
    const [searchValue,setSearchValue] = React.useState("")
    const handleInputValue = (e) => {
        setSearchValue(e.target.value)
    }
    // 搜索的回调
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setSearchValue('');
        setIsModalOpen(false);
    };
    const handleOk = () => {
        const filteredArray = essayArr.filter((essay) => {
            // 在标题和摘要中搜索关键词，不区分大小写
            const keyword = searchValue.toLowerCase();
            return essay.title.toLowerCase().includes(keyword) || essay.summary.toLowerCase().includes(keyword);
        });

        // 更新过滤后的文章数组
        setSearchEssayArr(filteredArray);
        navigate(`/search/${searchValue}`);
        setSearchValue('');
        setIsModalOpen(false);
    };
    // 昼夜切换的回调
    const changeColor = () => {
        changeMaskBac();
        changeListBac();
    };
    const handleRedirect = () => {
        navigate('/');
    };
    // 生成随机句子的axios请求
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://v1.hitokoto.cn/");
                const data = response.data.hitokoto
                setClause(data.substring(0, data.length - 1));
            } catch (error) {
                console.error("出错了", error);
            }
        };

        // 初始加载
        fetchData();

        // 设置定时器每隔10秒发送一次请求
        const intervalId = setInterval(fetchData, 30000);

        // 在组件卸载时清除定时器，以防止内存泄漏
        return () => clearInterval(intervalId);
    }, []);
    const talk = useTypewriter(clause)

    const [isHovered, setHovered] = React.useState(false);
    const [isPlaying, setPlaying] = React.useState(false);
    const [playIndex, setPlayIndex] = React.useState(0);
    const audioRef = useRef(null);
    const [musicArr,setMusicArr] = React.useState([
        {id:1,musicImg:'http://imge.kugou.com/stdmusic/20200620/20200620060922742572.jpg',musicSrc:ZMBWAN,musicName:'怎么办我爱你'},
        {id:2,musicImg:'http://imge.kugou.com/stdmusic/20160907/20160907214301690426.jpg',musicSrc:SX,musicName:'上心'},
        {id:3,musicImg:'http://imge.kugou.com/stdmusic/20210813/20210813082609185772.jpg',musicSrc:XTJ,musicName:'喜帖街'},
        {id:4,musicImg:'http://imge.kugou.com/stdmusic/20230928/20230928170855923969.jpg',musicSrc:XYZHDYH,musicName:'夏夜最后的烟火'},
        {id:5,musicImg:'http://imge.kugou.com/stdmusic/20170720/20170720185700280638.jpg',musicSrc:AN,musicName:'AI.NI爱你'},
        {id:6,musicImg:'http://imge.kugou.com/stdmusic/20161114/20161114163357720000.jpg',musicSrc:GC,musicName:'孤雏'},
        {id:7,musicImg:'http://imge.kugou.com/stdmusic/20150719/20150719025119946625.jpg',musicSrc:SLSZ,musicName:'失落沙洲'}
    ])

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handlePlay = () => {
        setPlaying(true);
        audioRef.current.play();
    };

    const handlePause = () => {
        setPlaying(false);
        audioRef.current.pause();
    };

    const handleNext = () => {
        setPlaying(false)
        if (playIndex === musicArr.length - 1) {
            setPlayIndex(0)
        }else {
            setPlayIndex(playIndex + 1)
        }
        setTimeout(() => {
            handlePlay()
        }, 200);
    };

    const handlePrev = () => {
        setPlaying(false)
        if (playIndex === 0) {
            setPlayIndex(musicArr.length - 1)
        }else {
            setPlayIndex(playIndex - 1)
        }
        setTimeout(() => {
            handlePlay()
        }, 200);
    };
    const playThis = (id) => {
        setPlaying(false)
        setPlayIndex(id - 1)
        setTimeout(() => {
            handlePlay()
        }, 200);
    }
    const [volume,setVolume] = React.useState(0.5)
    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };
    return (
        <nav className="header">
            <div className="navigation">
                <div className="name" onClick={handleRedirect}>JIULI-Blog</div>
                <div className="func">
                    <ul>
                        <li><NavLink to="/life"><Terrace className="icon" theme="outline" size="20" fill="#333"/>生活</NavLink></li>
                        <li><NavLink to="/study"><Bookshelf className="icon" theme="outline" size="20" fill="#333"/>学习</NavLink></li>
                        <li><NavLink to="/work"><AdProduct className="icon" theme="outline" size="20" fill="#333"/>归档</NavLink></li>
                        <li><NavLink to="/about"><Like className="icon" theme="outline" size="20" fill="#333"/>关于</NavLink></li>
                    </ul>
                </div>
                <div className="search">
                    <ul>
                        <li>
                            <Tooltip title="搜索">
                                <Search onClick={showModal} className="icon" theme="outline" size="20" fill="#333"/>
                            </Tooltip>
                            <Modal title="搜点什么" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="搜索" closeIcon={false}>
                                <Input placeholder="请输入搜索关键词..." value={searchValue} onChange={handleInputValue}/>
                            </Modal>
                        </li>
                        <li>
                            <Music className="icon" theme="outline" size="20" fill={isPlaying ? "#0D6EFD" : "#333"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            <div className={`musicBox ${!isHovered && 'hidden'}`} style={{backgroundColor: !ListBac && '#333',color: !ListBac && '#fff' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div className="musicInfo">
                                    <div className="musicImg">
                                        <img className={isPlaying ? 'rotate' : ''} alt="musicImg" src={musicArr[playIndex].musicImg}/>
                                        <audio ref={audioRef} src={musicArr[playIndex].musicSrc} />
                                    </div>
                                    <div className="musicPlayer">
                                        <div className="musicFunc">
                                            <GoStart theme="outline" size="25" fill={ListBac ? "#333" : "#fff"} onClick={handlePrev}/>
                                            {isPlaying ? (
                                                <Pause theme="outline" size="25" fill={ListBac ? "#333" : "#fff"} onClick={handlePause}/>
                                            ) : (
                                                <PlayOne theme="outline" size="25" fill={ListBac ? "#333" : "#fff"} onClick={handlePlay}/>
                                            )}
                                            <GoEnd theme="outline" size="25" fill={ListBac ? "#333" : "#fff"} onClick={handleNext}/>
                                        </div>
                                        <div className="musicVolume">
                                            <input type="range" min="0" max="1" step="0.05" value={volume} onChange={handleVolumeChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="musicList">
                                    {musicArr.map((musicObj) => {
                                        return(
                                            <div key={musicObj.id} className="music" style={{backgroundColor: playIndex === musicObj.id -1  && '#0D6EFD',color: playIndex === musicObj.id -1  && '#fff'}} onClick={() => playThis(musicObj.id)}>{musicObj.id}&nbsp;{musicObj.musicName}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                        <li>
                            <Tooltip title="昼夜切换">
                                {props.ListBac ? (
                                    <Moon onClick={changeColor} className="icon" theme="outline" size="20" fill="#333" />
                                ) : (
                                    <SunOne onClick={changeColor} className="icon" theme="outline" size="20" fill="#333" />
                                )}
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="clause">
                <div className="text">✨JIULI-Blog✨<br/></div>
                🌈{talk}🧸
            </div>
        </nav>
    )
}
