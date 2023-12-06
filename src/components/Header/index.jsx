import React, {useEffect} from "react"
import "./index.css"
import {AdProduct, Bookshelf, Like, LinkOne, Moon, Music, Search, SunOne, TagOne, Terrace} from "@icon-park/react";
import {NavLink, useNavigate} from "react-router-dom";
import {Input, Modal, Tooltip} from "antd";
import axios from "axios";
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
    useEffect(()=>{
        axios.get("https://v1.hitokoto.cn/").then(
            response => {
                setClause(response.data.hitokoto)
            },
            error => {
                console.log("出错了",error)
            }
        )
    },[])

    return (
        <nav className="header">
            <div className="navigation">
                <div className="name" onClick={handleRedirect}>JIULI-Blog</div>
                <div className="func">
                    <ul>
                        <li><NavLink to="/life"><Terrace className="icon" theme="outline" size="20" fill="#333"/>生活</NavLink></li>
                        <li><NavLink to="/study"><Bookshelf className="icon" theme="outline" size="20" fill="#333"/>学习</NavLink></li>
                        <li><NavLink to="/work"><AdProduct className="icon" theme="outline" size="20" fill="#333"/>作品</NavLink></li>
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
                🌈{clause}🧸
            </div>
        </nav>
    )
}
