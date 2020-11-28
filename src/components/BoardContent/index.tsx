import React from 'react'
const BoardContent: React.FC = ({ children }) => {
    return <div style={{ height: "calc(100vh - 52px)", overflow: 'hidden' }}>
        {children}
    </div>
}
export default BoardContent;