import React from "react"
import "./index.css"
import Right from "./Right/index.jsx";
import Left from "./Left/index.jsx";
import img from '../../assets/images/person.png'

export default function List(props) {

    const {essayArr,ListBac, onLike,onEssayClick} = props
    // 定义评论数组
    const [comments,setComments] = React.useState([
        {id:'001',ImgUrl:img,QQ:'10000',Nickname:'测试1',Email:'10000qq.com',Textarea:'测试111',Date:'Fri Dec 08 2023 12:00:00',Browser:'Chrome',OS:'Windows'},
    ])

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

    return (
        <div className="main">
            <Left essayArr={essayArr} ListBac={ListBac} labelArr={labelArr} onLike={onLike} onEssayClick={onEssayClick} comments={comments} setComments={setComments}/>
            <Right essayArr={essayArr} ListBac={ListBac} comments={comments} labelArr={labelArr}/>
        </div>
    )
}
