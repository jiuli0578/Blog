import React from "react"
import "../assets/css/About.css"
import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import bq from '../assets/images/user.png'
import dw from '../assets/images/dw.png'
import zs from '../assets/images/zs.png'
import PinL from "../components/PinL";

function About(props) {
    const {ItemBac,comments,setComments} = props
    return (
        <div className="sy">
            <div className={ItemBac ? `about day` : `about night`}>
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
                                        title: '正文',
                                    },
                                ]}
                    />
                </div>
                <div className="midd">
                    <div className="abMe">🪐关于我</div>
                    <div className="abLi">
                        <p>性格：乐观开朗，对生活充满热情，勤勉坚毅</p>
                        <p>爱好：兴趣广泛，爱好音乐，跑步和游戏，喜欢欣赏旅途中的风景</p>
                        <p>格言：心如花木，向阳而生</p>
                    </div>
                    <div className="abMe">🧸特别爱好</div>
                    <div className="abLi">
                        <p>🚀 游戏：CSGO，GTA5，都市：天际线，战地五，求生之路.....（玩过的太多了忽略不计）</p>
                        <p>🎧 音乐：喜欢的歌比较杂，民谣、R&B、流行.....,钟爱《上心》《喜帖街》</p>
                    </div>
                    <div className="bq" style={{ backgroundColor: ItemBac ? '#ffffff' : '#333333', color: ItemBac ? '#000000' : '#ffffff' }}>
                        <div className="wz"><img src={bq} alt="bq"/>&nbsp;版权属于：久砾</div>
                        <div className="wz"><img src={dw} alt="bq"/>&nbsp;本文链接：http://localhost:5173/about</div>
                        <div className="wz"><img src={zs} alt="bq"/>&nbsp;作品采用 <a target='_blank' href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-Hans">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a> 进行许可</div>
                    </div>
                </div>
            </div>
            <PinL ItemBac={ItemBac} comments={comments} setComments={setComments}/>
        </div>
    )
}

export default About