import React from 'react';
import ReactEcharts from "echarts-for-react";
import { EChartOption } from 'echarts';
const EchartOne: React.FC = () => {
    const option: EChartOption<any> = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }] as EChartOption.Series[]
    };

    return <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />

}
export default EchartOne;