import React from "react"
import "./index.css"
import TimeRender from "../TimeRender/index.jsx";

export default function Footer(props) {
    return (
        <div className={props.ListBac ? 'footer dayMode' : 'footer nightMode'}>
            <div className="msg">&copy;&nbsp;2023&nbsp;<a>JIULI-Blog</a></div>
            <div className="msg">生活本来就是一场浪漫革命</div>
            <TimeRender/>
        </div>
    )
}
