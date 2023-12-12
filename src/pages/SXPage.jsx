import React from 'react';
import ReactEcharts from 'echarts-for-react';

const SXPage = (props) => {
    const {essayArr} = props
    let studyNum = 0
    let lifeNum = 0
    essayArr.map((essayObj) => {
        essayObj.type === 'study' ? studyNum++ : lifeNum++
    })
    const getOption = () => {
        return {
            title: {
                text: '分类统计',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '文章类型',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '38%'],
                    data: [
                        { value: lifeNum, name: '学习' },
                        { value: studyNum, name: '生活' },
                    ],
                }
            ]
        }
    };

    return (
        <div>
            <ReactEcharts option={getOption()} />
        </div>
    )
}

export default SXPage

