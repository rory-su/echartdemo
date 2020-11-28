import React from 'react';
import './style.less';
import { Tabs } from 'antd';
import TabLayout from './TabLayout';
const { TabPane } = Tabs;
interface Iprops {
    tabs: Itab[]
}
interface Itab {
    id: string,
    label: String,
    charts: any[],
    centermap:any
}
const BasicEchartLayout: React.FC<Iprops> = ({ tabs = [] }) => {
    return (
        <Tabs defaultActiveKey={tabs[0].id} className="basic_echart_layout">
            {
                tabs.map(item => (
                    <TabPane tab={item.label} key={item.id}>
                        <TabLayout charts={item.charts} centermap={item.centermap}/>
                    </TabPane>
                ))
            }
        </Tabs>

    )
}
export default BasicEchartLayout;