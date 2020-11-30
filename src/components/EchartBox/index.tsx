import React, { useState, useRef, useEffect } from 'react';
import './style.less';
import { NodeExpandOutlined, BarChartOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import EchartOne from 'views/GroupMainView/Tabone/EchartOne'
import EcharTwo from 'views/GroupMainView/Tabone/EcharTwo'
export declare type RFC = 'right' | 'left' | 'center' | undefined;
export declare type POSITION = 'first' | 'second' | 'third' | undefined;

interface Iprops {
    title?: string,
    collapseRFC: RFC,
    position?: POSITION,
    detail?: []
}
const EchartBox: React.FC<Iprops> = ({ children, title, collapseRFC, detail = [] }) => {
    const ref = useRef<any>();
    const [ishover, setIshover] = useState(false);
    const [ClickRang, setClickRang] = useState<any>();

    async function handelshowCollapse() {
        if (ishover) return;
        const tt = await setIshover(true);
        const { x, y, width, height } = ref.current.getBoundingClientRect();
        setClickRang({ x: x, y: y, mx: x + width, my: y + height });
    }
    window.onmousedown = (e: any) => {
        if (ClickRang) {
            if (e.x >= ClickRang.x && e.x <= ClickRang.mx && e.y >= ClickRang.y && e.y <= ClickRang.my) {
                return
            }
            setIshover(false);
            setClickRang(undefined);
        }
    }
    return <div className="echart_box">
        <div className="top_menu">
            <div className="title">
                {title}
            </div>
            <div className="btns">
                <FullscreenExitOutlined title="全屏" />
                <BarChartOutlined title="ttt" />
                <NodeExpandOutlined title="详细" onClick={handelshowCollapse} />
            </div>
        </div>
        {children}
        <div className={`collapse_board_${collapseRFC} ${ishover ? 'collapse_board_active' : ''}`} ref={ref}>
            <div className="board_content">

                {
                    detail.map((item, i) => (
                        <div className="collapse_board_detail_line" key={i}>
                            {item}
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
}
export default EchartBox