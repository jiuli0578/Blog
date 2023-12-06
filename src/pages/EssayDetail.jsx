import React from "react"
import "../assets/css/EssayDetail.css"
import {Breadcrumb, message,} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {Calendar, Comments, DoubleLeft, DoubleRight, Like, PreviewOpen, User} from "@icon-park/react";

function EssayDetail(props) {

    const {id,type,title,summary,img,date,readings,likes: initialLikes} = props.essay
    // 点赞的初始化
    const [likes, setLikes] = React.useState(initialLikes);
    let tip = type === "life" ? "生活" : "学习"

    const [isClicked, setIsClicked] = React.useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleButtonClick = (id) => {
        if (!isClicked) {
            setIsClicked(true);
            props.onLike(id, likes + 1);
            setLikes((prevLikes) => prevLikes + 1);
            messageApi.open({
                type: 'success',
                content: '点赞成功💖',
            });
        } else {
            messageApi.open({
                type: 'warning',
                content: '您已经点过赞了💦',
            });
        }
    };

    // 假设 essayArr 包含所有文章的数组
    const { id: currentEssayId, type: currentEssayType } = props.essay;
    const currentIndex = props.essayArr.findIndex((essay) => essay.id === currentEssayId);

    // 处理边界情况
    const prevEssay = currentIndex > 0 ? props.essayArr[currentIndex - 1] : props.essayArr[props.essayArr.length - 1];
    const nextEssay = currentIndex < props.essayArr.length - 1 ? props.essayArr[currentIndex + 1] : props.essayArr[0];

    const [ImgUrl,setImgUrl] = React.useState('')
    const [QQInput,setQQInput] = React.useState('')
    const [EmailInput,setEmailInput] = React.useState('')
    const [NicknameInput,setNicknameInput] = React.useState('')
    const handleInputBlur = async () => {
        setEmailInput(QQInput + 'qq.com')
        try {
            const response = await fetch(`/api1/g?b=qq&nk=${QQInput}&s=100`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(response)
            setImgUrl(response.url)
            // console.log(dataUrl)
        }catch (error) {
            console.error('Error:', error.message);
        }

       /* try {
            const response = await fetch(`/api2/cgi_get_portrait.fcg?uins=${QQInput}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response;
            console.log('22',data)
        }catch (error) {
            console.error('Error:', error.message);
        }*/
    };
    const handleQQChange = (e) => {
        setQQInput(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    };

    // useEffect(
    //     // axios.get(`http://q.qlogo.cn/headimg_dl?dst_uin=${QQInput}&spec=640&img_type=jpg`)
    // )
    return (
        <div className="all">
            <div className="essay">
                <div className="top">
                    <Breadcrumb separator=">" className="crumbs"
                                items={[
                                    {
                                        href: '/',
                                        title: (
                                            <>
                                                <HomeOutlined />
                                                <span>首页</span>
                                            </>
                                        ),
                                    },
                                    {
                                        href: `/${type}`,
                                        title: `${tip}`
                                    },
                                    {
                                        title: '正文',
                                    },
                                ]}
                    />
                    <div className="func">
                        <User className="icon" theme="outline" size="16" fill="#a8a8a8" strokeWidth={3}/>JIULI
                        <Calendar className="icon" theme="outline" size="16" fill="#a8a8a8" strokeWidth={3}/>{date}
                        <PreviewOpen className="icon" theme="outline" size="16" fill="#a8a8a8" strokeWidth={3}/>{readings}
                    </div>
                </div>
                <div className="detail">
                    <div className="title">{title}</div>
                    <div className="img"><img src={img} alt="图片"/></div>
                    <div className="summary">{summary}。</div>
                </div>
                <div className={`mid ${isClicked ? 'clicked' : ''}`}>
                    {contextHolder}
                    <button
                        onClick={() => handleButtonClick(id)}
                        style={{
                            borderColor: isClicked ? '#ff0000' : 'darkgrey',
                            color: isClicked ? '#ff0000' : 'black', // 设置文字颜色
                        }}
                    >
                        <Like className="icon" theme={isClicked ? 'filled' : 'outline'} size="20" fill={isClicked ? '#ff0000' : '#a8a8a8'} strokeWidth={3} />
                        赞{likes}
                    </button>
                </div>
                <div className="low">
                    <div className="lside" style={{
                        backgroundImage: `url(${prevEssay.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className="lsideText">
                            {prevEssay.title}
                            <div className="lsideRoute">
                                <DoubleLeft className="icon" theme="outline" size="20" fill="#fff" strokeWidth={3}/>上一篇
                            </div>
                        </div>
                    </div>
                    <div className="rside" style={{
                        backgroundImage: `url(${nextEssay.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className="rsideText">
                            {nextEssay.title}
                            <div className="rsideRoute">
                                下一篇<DoubleRight className="icon" theme="outline" size="20" fill="#fff" strokeWidth={3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comments">
                <div className="top">
                    <Comments className="icon" theme="multi-color" size="20" fill={['#337ab7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/>评论区
                </div>
                <div className="pl">
                    <form className="form">
                        <div className="avatar">
                            <img src={ImgUrl ? ImgUrl : 'https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701040851331-eef78742f488?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'} alt="avatar"/>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="填写QQ获取邮箱和昵称" value={QQInput} onBlur={handleInputBlur} onChange={handleQQChange}/>
                            <input type="text" placeholder="邮箱" value={EmailInput} onChange={handleEmailChange}/>
                            <input type="text" placeholder="昵称"/>
                        </div>
                        <div className="btn">
                            <textarea placeholder="评论内容"/>
                            <button>提交评论</button>
                        </div>
                    </form>
                </div>
                <div className="show">

                </div>
            </div>
        </div>
    );
}

export default EssayDetail