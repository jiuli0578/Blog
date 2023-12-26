import React, {useEffect} from "react"
import "../components/List/index.css"
import {CalendarThirtyTwo, Fire, TagOne} from "@icon-park/react";
import "../assets/css/Item.css"
import {useLocation, useParams} from "react-router-dom";

function Item(props) {
    const {visibleItems,handleEssayClick,handleShowAll,showAll,searchEssayArr,setSearchEssayArr} = props

    return (
        <div className="list">
            {searchEssayArr.length !== 0 ? searchEssayArr.map((essayObj,index) => {
                const isEven = index % 2 === 0;
                const itemClass = isEven ? 'even-item' : 'odd-item'
                let tip = essayObj.type === "life" ? "生活" : "学习"
                return (
                    <div key={essayObj.id} className={`item ${itemClass}`} onClick={() => handleEssayClick(essayObj)}>
                        <div className="pic"><img src={essayObj.img} alt="img1"/></div>
                        <div className="detail">
                            <div className="blur-background" style={{backgroundImage: `url(${essayObj.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                            <div className="content">
                                <ul>
                                    <li><CalendarThirtyTwo className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{essayObj.date}
                                    </li>
                                    <li><Fire className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{essayObj.readings}阅读
                                    </li>
                                    <li><TagOne className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{tip}
                                    </li>
                                </ul>
                                <h3>{essayObj.title}</h3>
                                <div className="phrases">{essayObj.summary}</div>
                            </div>
                        </div>
                    </div>
                );
            }) : visibleItems.map((essayObj,index) => {
                const isEven = index % 2 === 0;
                const itemClass = isEven ? 'even-item' : 'odd-item'
                let tip = essayObj.type === "life" ? "生活" : "学习"
                return (
                    <div key={essayObj.id} className={`item ${itemClass}`} onClick={() => handleEssayClick(essayObj)}>
                        <div className="pic"><img src={essayObj.img} alt="img1"/></div>
                        <div className="detail">
                            <div className="blur-background" style={{backgroundImage: `url(${essayObj.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                            <div className="content">
                                <ul>
                                    <li><CalendarThirtyTwo className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{essayObj.date}
                                    </li>
                                    <li><Fire className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{essayObj.readings}阅读
                                    </li>
                                    <li><TagOne className="icon" theme="multi-color" size="15" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}/>{tip}
                                    </li>
                                </ul>
                                <h3>{essayObj.title}</h3>
                                <div className="phrases">{essayObj.summary}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
            {!showAll && visibleItems.length >= 5 && searchEssayArr.length === 0 && (
                <div className="btn">
                    <button onClick={handleShowAll}>加载更多</button>
                </div>
            )}
        </div>
    )
}

export default Item