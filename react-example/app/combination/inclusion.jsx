import React from 'react';

function SplitSpane(props) {
    return <div className={'SplitSpane SplitSpane' + props.color}>{props.children}</div>;
}

function App(props) {
    return (
        <SplitSpane color="blue">
            <h1 className="app-title">App Title</h1>
            <p className="app-message">App Message</p>
        </SplitSpane>
    );
}

export default App;
