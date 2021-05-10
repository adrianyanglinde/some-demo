import React, { Component, PureComponent } from 'react';

// 由于组件是 React 中最基础的代码复用单元，现在尝试重构Origin一部分代码使其能够在 <Mouse> 组件中封装我们需要共享的行为
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: '0',
            y: '0'
        };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                监听鼠标移动行为
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;
