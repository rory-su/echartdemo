import React from 'react';
import BasicEchartLayout from 'components/BasicEchartLayout';

import EchartOne from './Tabone/EchartOne';
import DetailOne from './Tabone/EchartOne/DetailOne'
import DetailTwo from './Tabone/EchartOne/DetailTwo'
import DetailThree from './Tabone/EchartOne/DetailThree'


import EcharTwo from './Tabone/EcharTwo'
import CenterMap from './Tabone/CenterMap';
const GroupMainView: React.FC = () => {
    const tabdatas = [
        { id: "01", label: "看板一", charts: [{ title: "人口增长", chart: <EchartOne />, detail: [<DetailOne />, <DetailTwo />, <DetailThree />] }], centermap: <CenterMap /> },
        { id: "02", label: "看板二", charts: [{ title: "人口增长", chart: <EcharTwo /> }], centermap: <CenterMap /> },
        { id: "03", label: "看板三", charts: [{ title: "人口增长", chart: <EchartOne /> }], centermap: <CenterMap /> }
    ]
    return (
        <div>
            <BasicEchartLayout tabs={tabdatas} />
        </div>
    )
}
export default GroupMainView;