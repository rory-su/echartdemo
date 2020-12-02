import React from 'react';
import { Row, Col } from 'antd';
import EchartBox from 'components/EchartBox';
import MapEchartBox from 'components/MapEchartBox';
interface Iprops {
    charts: any[],
    centermap: any
}
const TabLayout: React.FC<Iprops> = ({ charts = [], centermap }) => {
    return <Row className="tab_layout">
        <Col className="col_line col_left" span={7} >
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='right' detail={charts[0].detail}>{charts[0].chart}</EchartBox>
            </Row>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='right'>{charts[0].chart}</EchartBox>
            </Row>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='right'>{charts[0].chart}</EchartBox>
            </Row>
        </Col>
        <Col className="col_line" span={10}>
            <Row className="big_item">
                <MapEchartBox>
                    {centermap}
                </MapEchartBox>
            </Row>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC="center">{charts[0].chart}</EchartBox>
            </Row>
        </Col>
        <Col className="col_line" span={7}>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='left'>{charts[0].chart}</EchartBox>
            </Row>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='left' >{charts[0].chart}</EchartBox>
            </Row>
            <Row className="default_item">
                <EchartBox title={charts[0].title} collapseRFC='left' >{charts[0].chart}</EchartBox>
            </Row>
        </Col>
    </Row>
}
export default TabLayout;