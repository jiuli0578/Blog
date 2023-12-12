import React from "react"
import bac from "../../../assets/images/bac.gif";
import avatar from "../../../assets/images/avatar.jpg";
import {TagOne} from "@icon-park/react";
import {Button} from "antd";
import "./index.css"

export default function Right(props) {
    const {essayArr,labelArr,ListBac,comments} = props
    return (
        <div className="right">
            <div className="msg1">
                <div className="top"><img src={bac} alt="bac"/></div>
                <div className={ListBac ? 'mid dayMode' : 'mid nightMode'}>
                    <img src={avatar} alt="avatar"/>
                    <h3><b>久砾</b></h3>
                    <h5>心如花木，向阳而生</h5>
                </div>
                <div className={ListBac ? 'below dayMode' : 'below nightMode'}>
                    <table>
                        <tbody>
                        <tr>
                            <th>文章</th>
                            <th>评论</th>
                            <th>标签</th>
                        </tr>
                        <tr>
                            <td>{essayArr.length}</td>
                            <td>{comments.length}</td>
                            <td>{labelArr.length}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={ListBac ? 'msg2 dayMode' : 'msg2 nightMode'}>
                <div className="label"><TagOne className="icon" theme="multi-color" size="20" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/><b>标签</b></div>
                <div className="labelList">
                    {
                        labelArr.map((labelObj) => {
                            return(
                                <Button type="primary" key={labelObj.id}>{labelObj.text}</Button>
                            )
                        })
                    }
                </div>
            </div>
            {/*<div className={ListBac ? 'msg3 dayMode' : 'msg3 nightMode'}>
                <div></div>
            </div>*/}
        </div>
    )
}
