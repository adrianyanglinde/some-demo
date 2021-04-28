import React from 'react';

function LeftContent() {
    return <div>Left Content</div>;
}
function RightContent() {
    return <div>Right Content</div>;
}

function SplitSpane(props) {
    return (
        <div className="SplitSpane">
            <div className="SplitSpane-Left">{props.left}</div>
            <div className="SplitSpane-right">{props.right}</div>
        </div>
    );
}

function App() {
    return <SplitSpane left={<LeftContent />} right={<RightContent />}></SplitSpane>;
}

export default App;
