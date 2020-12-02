import React, { useRef,useEffect } from 'react';
import BasicEchartLayout from 'components/BasicEchartLayout';
const SimpleEchartView: React.FC = () => {
    const testvalue = useRef<string>("sssss");
    
    window.ff = (value: string) => {
        console.log("testvalue.current",testvalue.current)
        testvalue.current = value;
        console.log("value",value)
    }
    useEffect(()=>{
        console.log("dddddddddddddddddddd")
    },[testvalue.current])
    return <div>
        {testvalue.current}
        other 分支   修改修改修改
    </div>
}
export default SimpleEchartView;