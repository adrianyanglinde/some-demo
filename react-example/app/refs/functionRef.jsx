import React, { Component } from 'react';

//你不能在函数组件上使用 ref 属性，因为它们没有实例 (可用forwardRef)
function MyCom() {
    return <input type="text" />;
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.handleClick();
    }
    render() {
        return <MyCom ref={this.textInput}></MyCom>;
    }
}

export default App;
