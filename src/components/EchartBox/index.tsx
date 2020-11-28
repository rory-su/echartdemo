import React, { useState } from 'react';
import './style.less';
import { NodeExpandOutlined, BarChartOutlined, FullscreenExitOutlined } from '@ant-design/icons';
export declare type RFC = 'right' | 'left' | 'center' | undefined;
export declare type POSITION = 'first' | 'second' | 'third' | undefined;
interface Iprops {
    title?: string,
    collapseRFC: RFC,
    position?: POSITION,
}
const EchartBox: React.FC<Iprops> = ({ children, title, collapseRFC, position }) => {
    const [ishover, setIshover] = useState(false);
    return <div className="echart_box">
        <div className="top_menu">
            <div className="title">
                {title}
            </div>
            <div className="btns">
                <FullscreenExitOutlined title="全屏" />
                <BarChartOutlined title="ttt" />
                <NodeExpandOutlined title="详细" onMouseOver={_ => setIshover(true)} onMouseLeave={_ => setIshover(false)} />
            </div>
        </div>
        {children}
        <div className={`collapse_board_${collapseRFC} ${ishover ? 'collapse_board_active' : ''}`}>
            sdfsfsdfsd
        </div>
    </div>
}
export default EchartBox