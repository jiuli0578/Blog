import React from "react"
import bac from "../../../assets/bac.gif";
import avatar from "../../../assets/avatar.jpg";
import {TagOne} from "@icon-park/react";
import {Button} from "antd";
import "./index.css"

export default function Right(props) {
    // 定义标签数组
    const [labelArr,setLabelArr] = React.useState([
        {id:"001",text:"GitHUb"},
        {id:"002",text:"后端"},
        {id:"003",text:"Git"},
        {id:"004",text:"前端"},
        {id:"005",text:"React"},
        {id:"006",text:"JavaScript"},
        {id:"007",text:"软件工程"},
        {id:"008",text:"Vue"},
        {id:"009",text:"Uniapp"},
        {id:"010",text:"Web"},
        {id:"011",text:"TypeScript"},
        {id:"012",text:"HTML"},
    ])
    // 定义评论总数
    const [commentsTotal,setCommentsTotal] = React.useState("266")
    return (
        <div className="right">
            <div className="msg1">
                <div className="top"><img src={bac} alt="bac"/></div>
                <div className={props.ListBac ? 'mid dayMode' : 'mid nightMode'}>
                    <img src={avatar} alt="avatar"/>
                    <h3><b>久砾</b></h3>
                    <h5>心如花木，向阳而生</h5>
                </div>
                <div className={props.ListBac ? 'below dayMode' : 'below nightMode'}>
                    <table>
                        <tbody>
                        <tr>
                            <th>文章</th>
                            <th>评论</th>
                            <th>标签</th>
                        </tr>
                        <tr>
                            <td>{props.essayArr.length}</td>
                            <td>{commentsTotal}</td>
                            <td>{labelArr.length}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={props.ListBac ? 'msg2 dayMode' : 'msg2 nightMode'}>
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
        </div>
    )
}
