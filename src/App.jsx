import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {

    // 定义文章数组
    const [essayArr,setEssayArr] = React.useState([
        {id:"001",date:"2023-11-20",likes:1, readings:10,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700656250046-f6c5680400d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",title:"人生像童话，却胜于童话",summary:"寂静的森林里，树木窃窃私语，萤火虫的光不再温暖。鹅卵石铺就的小路上布满了多少人的脚印？我在这里轻轻吟颂着温暖的童话"},
        {id:"002",date:"2023-11-21",likes:2, readings:25,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700475477254-5986ff2f1dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",title:"晚安…………",summary:"夜，如墨般滴在天空的画布上，渗透、晕开，用画笔轻点几下，便有了星辰，再描上几下，柔和的月光将射进你的心房"},
        {id:"003",date:"2023-11-18",likes:1, readings:7,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700833533652-2ebae7f13f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",title:"相识是偶然，也是缘分",summary:"月光下的佳人，抚琴，歌唱，琴声瑟瑟，笛音箫箫，谁在伴乐，自己人独奏，一会儿琴声，一会儿笛音，孤独的乐声，幻想着美好"},
        {id:"004",date:"2023-11-22",likes:3, readings:66,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/plus/premium_photo-1680667682521-a0559883a1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",title:"开始行动，才是正道理",summary:"时间和空间，常会和我们开一些玩笑，从时空的迷雾里冲出来，我们将不再摔倒；生活和命运也会和我们做一些游戏，从生命的冲突里拼出去，我们将无所畏惧"},
        {id:"005",date:"2023-11-25",likes:0, readings:54,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700664957873-eed7960589f5?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",title:"把快乐放进重点反复背诵",summary:"以前喜欢早晨的朝阳，傍晚的夕阳，夜晚的星空，现在则喜欢夜空的月亮。万物静下来的夜晚，就像一个无声的怀抱"},
        {id:"006",date:"2023-11-27",likes:5, readings:74,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701161594822-3b7af54a14d3?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",title:"守住所有的情绪好好生活",summary:"我一向自诩剔透清晰，见青山，便知云深几重；见宫墙，便知事分几种。唯独见你，束手无策"},
        {id:"007",date:"2023-11-26",likes:6, readings:24,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700471880758-2c1011b275ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",title:"一梦入混沌，烟火撞星辰",summary:"夏天真是太可爱的季节了，阳光明媚，好像所有的烦恼都能拿出来在阳光下晒一晒。第二天醒来，又是崭新的一天了"},
        {id:"008",date:"2023-11-25",likes:5, readings:24,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1699461840896-de3ae8c46de8?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",title:"攒满想念，期待下次再见",summary:"所谓命运，是我隔着千山万水也还是想遇见你，是我有心与你共饮一杯，你的酒杯早已空了"},
        {id:"009",date:"2023-11-30",likes:4, readings:24,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701220293175-5c17f172b77a?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",title:"青丝蘸白雪，来路生云烟",summary:"我怕你两个身影，一个月色下模糊到头，一个日光里透彻见底"},
        {id:"010",date:"2023-11-11",likes:2, readings:24,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701261026789-aca18e71ae4b?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",title:"希望熬过一切，星光璀璨",summary:"这一路，饮过烈酒，红过眼眶，心死如灰，孤独成性。直到遇见你，风驻，雨停，雾散尽"},
        {id:"011",date:"2023-11-05",likes:1, readings:24,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701198067358-dbe0ac58a2c2?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",title:"在努力的前提下顺其自然",summary:"要吻上很多很多青蛙，才有一个变成王子。中间好些吻，花得冤枉"},
        {id:"012",date:"2023-11-24",likes:3, readings:24,type:"study",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1700882759985-f1ffc657cb5f?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",title:"最重要的是，与自己和解",summary:"等到那些旧事没人再提，我提壶酒看你焙新茗。想来从年少，一路到古稀。青天共白月，我共你"},
        {id:"013",date:"2023-11-17",likes:0, readings:24,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701219557502-8cda1863458e?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",title:"心中有丘壑，眉目作山河",summary:"幸亏时光不会倒流，否则万物一定会朝旧岁月里疾步奔跑"},
        {id:"014",date:"2023-11-26",likes:9, readings:24,type:"life",img:"https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1701206886289-05bc76ff6071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",title:"树树皆秋色，山山唯落晖",summary:"莫使明月下山腰，从此后月不暗，人不老，百年一日如今宵"},

    ])
    // 更新点赞数的回调
    const handleLike = (essayId, newLikes) => {
        // 在这里更新文章数组中相应文章的点赞数
        setEssayArr((prevArr) =>
            prevArr.map((essay) =>
                essay.id === essayId
                    ? {
                        ...essay,
                        likes: newLikes,
                    }
                    : essay
            )
        );
    };
    // 处理更新后的文章函数
    const handleUpdatedEssay = (updatedEssay) => {
        // 找到需要更新的文章在数组中的索引
        const updatedIndex = essayArr.findIndex((essay) => essay.id === updatedEssay.id);

        // 创建新的文章数组，更新指定索引处的文章对象
        const updatedEssayArr = [...essayArr];
        updatedEssayArr[updatedIndex] = updatedEssay;

        // 更新文章数组
        setEssayArr(updatedEssayArr);
    };
    // 定义遮罩颜色的状态
    const [maskBac, setMaskBac] = React.useState(true);
    // 遮罩颜色的初始化
    const maskColor = maskBac ? 'rgba(243, 243, 243, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    // List中mid和below的背景色的状态
    const [ListBac, setListBac] = React.useState(true);

    // 更改遮罩颜色的回调
    const changeMaskBac = () => {
        setMaskBac(!maskBac);
    };
    // 更改List中mid和below的背景色的回调
    const changeListBac = () => {
        setListBac(!ListBac);
    };
    // 点击改变背景色的回调
    const changeColor = () => {
        setListBac(prevListBac => !prevListBac);
    };
    return (
        <div className={`wrap ${maskBac ? 'day-mode' : 'night-mode'}`}>
            <div className="wrap-background"></div>
            <div className="wrap-mask" style={{ backgroundColor: maskColor }}></div>
            <Header changeMaskBac={changeMaskBac} changeListBac={changeListBac} changeColor={changeColor} ListBac={ListBac}/>
            <Routes>
                <Route path="/" element={<List essayArr={essayArr} ListBac={ListBac} />} />
                <Route path="/:category" element={<List essayArr={essayArr} ListBac={ListBac} onEssayClick={handleUpdatedEssay}/>} />
                <Route path="/essay/:id" element={<List essayArr={essayArr} ListBac={ListBac}  onLike={handleLike}/>} />
            </Routes>
            <Footer ListBac={ListBac}/>
        </div>
    )
}

export default App;
