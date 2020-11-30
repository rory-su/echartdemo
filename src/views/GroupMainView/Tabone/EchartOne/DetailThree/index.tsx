import React from 'react';
import ReactEcharts from "echarts-for-react";
import { EChartOption } from 'echarts';
const DetailThree: React.FC = () => {
    const option: EChartOption<any> = {
        title: {
            text: "散点图"
        },
        grid: {
            top: 50
        },
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };
    return <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />

}
export default DetailThree;