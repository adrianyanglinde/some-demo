import React, { Component, PureComponent } from 'react';
import CounterButton from './CounterButton.jsx';

// 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
// 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。

class MouseTracker extends React.Component {
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
                <p>
                    The current mouse position is x:{this.state.x},y:{this.state.y}
                </p>
            </div>
        );
    }
}

export default MouseTracker;

// 我们如何在另一个组件中复用这个行为(鼠标移动的行为)?
// 换个说法，若另一个组件需要知道鼠标位置，我们能否封装这一行为，以便轻松地与其他组件共享它？
