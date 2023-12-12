import React from "react"
import "../assets/css/Work.css"
import {ChartHistogramOne, ChartRing, Comments, DataOne, DocDetail, Down, FolderOpen, Pencil, TagOne, Up} from "@icon-park/react";
import SXPage from "./SXPage.jsx";
import TXPage from "./TXPage.jsx";
import {Link} from "react-router-dom";

function Work(props) {
    const {ItemBac,labelArr,essayArr,comments} = props
    const [isShow,setIsShow] = React.useState({showDetail1:false,showDetail2:false})
    const handleShow = (detail) => {
        setIsShow((prevState) => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === detail ? !prevState[key] : false]))
        }));
    }
    const detail23 = essayArr.filter(essay => {
        const essayDate = new Date(essay.date)
        return essayDate.getFullYear() === 2023
    }).length
    const detail22 = essayArr.filter(essay => {
        const essayDate = new Date(essay.date)
        return essayDate.getFullYear() === 2022
    }).length
    return (
        <div className={ItemBac ? 'all day' : 'all night'}>
            <div className="overview">
                <div className="allApp"><DataOne className="icon" theme="multi-color" size="27" fill={['#337ab7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/>&nbsp;总览</div>
                <div className="col">
                    <div className="essay">
                        <div className="tb"><DocDetail className="icon" theme="multi-color" size="65" fill={['#337ab7' ,'#80B7F9' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/></div>
                        <div className="text">
                            <div className="bq">{essayArr.length}</div>文章总计
                        </div>
                    </div>
                    <div className="comment">
                        <div className="tb"><Comments className="icon" theme="multi-color" size="65" fill={['#09dc81' ,'#4BE2AC' ,'#FFF' ,'#06CC76']} strokeWidth={3}/></div>
                        <div className="text">
                            <div className="bq">{comments.length}</div>评论总计
                        </div>
                    </div>
                    <div className="tip">
                        <div className="tb"><TagOne className="icon" theme="multi-color" size="65" fill={['#f9821d' ,'#FFAC3E' ,'#FFF' ,'#FFAC3E']} strokeWidth={3}/></div>
                        <div className="text">
                            <div className="bq">{labelArr.length}</div>标签总计
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart">
                <div className="allApp"><ChartRing className="icon" theme="multi-color" size="27" fill={['#337ab7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/>&nbsp;统计图</div>
                <div className="tb">
                    <div className="sx"><SXPage essayArr={essayArr}/></div>
                    <div className="tx"><TXPage labelArr={labelArr}/></div>
                </div>
            </div>
            <div className="essayList">
                <div className="allApp"><ChartHistogramOne className="icon" theme="multi-color" size="27" fill={['#337ab7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/>&nbsp;文章列表</div>
                <div className="lb">
                    <div className={ItemBac ? `lbDetail ${isShow.showDetail1 ? 'show' : ''}` : `nlbDetail ${isShow.showDetail1 ? 'show' : ''}`}>
                        <div className="tit" onClick={() => handleShow('showDetail1')}>
                            <div className="front">2023年&nbsp;&nbsp;
                                <Pencil theme="outline" size="16" fill={ItemBac ? "#333" : "#fff"}/>
                                {detail23}篇&nbsp;&nbsp;
                                <FolderOpen theme="outline" size="16" fill={ItemBac ? "#333" : "#fff"}/>555字
                            </div>
                            <div className="behind">
                                <div className="jt">
                                    {isShow.showDetail1 ? (
                                        <Up className="icon" theme="outline" size="24" fill="#3c72ec"/>
                                    ) : (
                                        <Down className="icon" theme="outline" size="24" fill={ItemBac ? "#333" : "#fff"}/>
                                    )}
                                </div>
                            </div>
                        </div>
                        {isShow.showDetail1 && (
                            <div className="directory">
                                <div className="line"></div>
                                <div className="essayList">
                                    <ul>
                                        <li>
                                            <h5>12月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2023 && essayDate.getMonth() === 11;
                                                    })
                                                    .map(essay => (
                                                        <Link key={essay.id} to={`/essay/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                    ))
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <h5>11月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2023 && essayDate.getMonth() === 10;
                                                    })
                                                        .map(essay => (
                                                            <Link key={essay.id} to={`/essay/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                        ))
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <h5>10月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2023 && essayDate.getMonth() === 9;
                                                    })
                                                        .map(essay => (
                                                            <Link key={essay.id} to={`/essay/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                        ))
                                                }
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={ItemBac ? `lbDetail ${isShow.showDetail1 ? 'show' : ''}` : `nlbDetail ${isShow.showDetail1 ? 'show' : ''}`}>
                        <div className="tit" onClick={() => handleShow('showDetail2')}>
                            <div className="front">2022年&nbsp;&nbsp;
                                <Pencil theme="outline" size="16" fill={ItemBac ? "#333" : "#fff"}/>
                                {detail22}篇&nbsp;&nbsp;
                                <FolderOpen theme="outline" size="16" fill={ItemBac ? "#333" : "#fff"}/>2545字
                            </div>
                            <div className="behind">
                                <div className="jt">
                                    {isShow.showDetail2 ? (
                                        <Up className="icon" theme="outline" size="24" fill="#3c72ec"/>
                                    ) : (
                                        <Down className="icon" theme="outline" size="24" fill={ItemBac ? "#333" : "#fff"}/>
                                    )}
                                </div>
                            </div>
                        </div>
                        {isShow.showDetail2 && (
                            <div className="directory">
                                <div className="line"></div>
                                <div className="essayList">
                                    <ul>
                                        <li>
                                            <h5>12月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2022 && essayDate.getMonth() === 11;
                                                    })
                                                        .map(essay => (
                                                            <Link key={essay.id} to={`/your-path/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                        ))
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <h5>11月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2022 && essayDate.getMonth() === 10;
                                                    })
                                                        .map(essay => (
                                                            <Link key={essay.id} to={`/your-path/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                        ))
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <h5>10月</h5>
                                            <p>
                                                {
                                                    essayArr.filter(essay => {
                                                        const essayDate = new Date(essay.date);
                                                        return essayDate.getFullYear() === 2022 && essayDate.getMonth() === 9;
                                                    })
                                                        .map(essay => (
                                                            <Link key={essay.id} to={`/your-path/${essay.id}`}>{essay.date.slice(5)}&nbsp;{essay.title}</Link>
                                                        ))
                                                }
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work