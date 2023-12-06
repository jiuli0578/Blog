import React from "react"
import "./index.css"
import Right from "./Right/index.jsx";
import Left from "./Left/index.jsx";

export default function List(props) {

    const {essayArr,ListBac, onLike,onEssayClick} = props

    return (
        <div className="main">
            <Left essayArr={essayArr} ListBac={ListBac} onLike={onLike} onEssayClick={onEssayClick}/>
            <Right essayArr={essayArr} ListBac={ListBac} />
        </div>
    )
}
