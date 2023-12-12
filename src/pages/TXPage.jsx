import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';

const TXPage = (props) => {
    const {labelArr} = props
    const [sales, setSales] = useState([2, 5, 6, 3, 4, 2,5, 5, 6, 3, 7, 4]);
    // 配置对象
    const getOption = (sal) => {
        return {
            title: {
                text: '标签统计',
                x: 'center'
            },
            tooltip: {},
            xAxis: {
                data: labelArr.map(item => item.text),
                axisLabel: {
                    rotate: 45,
                }
            },
            yAxis: {},
            series: {
                name: '数量',
                type: 'bar',
                data: sales
            },
            grid: {
                top:'25px',
                bottom:'50%'
            }
        }
    };

    return (
        <div>
            <ReactEcharts option={getOption(sales)} />
        </div>
    )
}

export default TXPage