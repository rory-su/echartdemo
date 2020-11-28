import React from 'react';
import ReactEcharts from "echarts-for-react";
import 'echarts/map/json/china.json';
import 'echarts/map/js/china';
const CenterMap: React.FC = () => {
    const option = {
        series: [{
            type: 'map',
            map: 'china',
            center: [105.29, 37.24],
            roam: 'move',
            zoom: 1.20,
            nameMap: {
                'China': '中国'
            }
        }]
    }
    return <ReactEcharts option={option} notMerge={true} lazyUpdate={true} style={{ width: '100%', height: '100%' }} />
}
export default CenterMap;