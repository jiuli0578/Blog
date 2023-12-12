import React, {useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom";
import "./index.css"
import EssayDetail from "../../../pages/EssayDetail";
import Item from "../../../pages/Item";
import Work from "../../../pages/Work"
import Label from "../../../pages/Label.jsx";
import FrdC from "../../../pages/FrdC.jsx";
import About from "../../../pages/About.jsx";

export default function Left(props) {

    const {essayArr,labelArr,onLike,onEssayClick,ListBac,comments,setComments} = props

    // 获取路由参数
    const { category,id } = useParams();
    const navigate = useNavigate(); // 获取导航函数
    // 定义是否展示全部的状态
    const [showAll, setShowAll] = React.useState(false);
    // 定义根据路由显示的文章数组
    const [visibleItems, setVisibleItems] = React.useState([]);

    const [selectedEssay, setSelectedEssay] = React.useState(null);
    // 动态控制文章列表展示区高度
    const leftHeight = showAll  ? `${visibleItems.length * 270 + 50}px` : 'auto';


    // 更改是否展示全部状态的回调
    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    // 点击文章项时更新选中的文章状态
    const handleEssayClick = (essay) => {
        setSelectedEssay(essay);
        navigate(`/essay/${essay.id}`);
        // 点击文章时更新 readings 属性
        const updatedEssay = {
            ...essay,
            readings: essay.readings + 1,
        };

        // 调用父组件传递的 onEssayClick 回调
        onEssayClick(updatedEssay);
    };
    useEffect(() => {
        if (id) {
            const selected = essayArr.find((essay) => essay.id === id);
            setSelectedEssay(selected || null);
        } else {
            // 当路由参数变化时，清除选中文章状态
            setSelectedEssay(null);
        }
    }, [id, essayArr]);

    useEffect(() => {
        // 根据路由参数和 showAll 筛选文章
        const filteredEssays = category
            ? essayArr.filter((essayObj) => essayObj.type === category)
            : essayArr;

        setVisibleItems(showAll ? filteredEssays : filteredEssays.slice(0, 5));
    }, [category, essayArr, showAll]);

    return (
        <div className="left"  style={{ height: leftHeight }}>
            {(() => {
                switch (category){
                    case 'work':
                        return <Work ItemBac={ListBac} essayArr={essayArr} comments={comments} labelArr={labelArr}/>
                    case 'label':
                        return <Label ItemBac={ListBac}/>
                    case 'frdC':
                        return <FrdC/>
                    case 'about':
                        return <About/>
                    default:
                        return (selectedEssay ? (
                            <EssayDetail essay={selectedEssay} ItemBac={ListBac} essayArr={essayArr} onLike={onLike} comments={comments} setComments={setComments}/>
                        ) : (
                            <Item visibleItems={visibleItems} handleEssayClick={handleEssayClick} showAll={showAll} handleShowAll={handleShowAll} onEssayClick={onEssayClick}/>
                        ))
                }
            })()}
        </div>
    )
}
