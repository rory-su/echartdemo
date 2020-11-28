import React from 'react';
import BasicEchartLayout from 'components/BasicEchartLayout';
import EchartOne from './Tabone/EchartOne';
import CenterMap from './Tabone/CenterMap';
const GroupMainView: React.FC = () => {
    const tabdatas = [
        { id: "01", label: "看板一", charts: [{ title: "人口增长", chart: <EchartOne /> }], centermap: <CenterMap /> },
        { id: "02", label: "看板二", charts: [{ title: "人口增长", chart: <EchartOne /> }], centermap: <CenterMap /> },
        { id: "03", label: "看板三", charts: [{ title: "人口增长", chart: <EchartOne /> }], centermap: <CenterMap /> }
    ]
    return (
        <div>
            <BasicEchartLayout tabs={tabdatas} />
        </div>
    )
}
export default GroupMainView;