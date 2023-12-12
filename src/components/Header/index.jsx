import React, {useEffect} from "react"
import "./index.css"
import {AdProduct, Bookshelf, Like, LinkOne, Moon, Music, Search, SunOne, TagOne, Terrace} from "@icon-park/react";
import {NavLink, useNavigate} from "react-router-dom";
import {Input, Modal, Tooltip} from "antd";
import axios from "axios";
import useTypewriter from "react-typewriter-hook"
export default function Header(props) {
    // 搜索的回调
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [clause,setClause] = React.useState("")
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // 昼夜切换的回调
    const changeColor = () => {
        props.changeMaskBac();
        props.changeListBac();
    };
    // 路由重定向
    const navigate = useNavigate();
    // 点击重定向的回调
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
    return (
        <nav className="header">
            <div className="navigation">
                <div className="name" onClick={handleRedirect}>JIULI-Blog</div>
                <div className="func">
                    <ul>
                        <li><NavLink to="/life"><Terrace className="icon" theme="outline" size="20" fill="#333"/>生活</NavLink></li>
                        <li><NavLink to="/study"><Bookshelf className="icon" theme="outline" size="20" fill="#333"/>学习</NavLink></li>
                        <li><NavLink to="/work"><AdProduct className="icon" theme="outline" size="20" fill="#333"/>归档</NavLink></li>
                        <li><NavLink to="/label"><TagOne className="icon" theme="outline" size="20" fill="#333"/>标签</NavLink></li>
                        <li><NavLink to="/frdC"><LinkOne className="icon" theme="outline" size="20" fill="#333"/>友链</NavLink></li>
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
                                <Input placeholder="请输入搜索关键词..." />
                            </Modal>
                        </li>
                        <li>
                            <Music className="icon" theme="outline" size="20" fill="#333"/>
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
