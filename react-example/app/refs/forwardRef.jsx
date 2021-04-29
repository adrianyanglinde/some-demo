import React, { Component } from 'react';

// Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。（Ref=Reference）

// 转发 refs 到 DOM 组件
// Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。
const FancyButton = React.forwardRef((props, ref) => {
    return <button ref={ref}>{props.children}</button>;
});
FancyButton.displayName = 'FancyButton';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.buttonRef = React.createRef();
    }
    componentDidMount() {
        // 获取（指向） FancyButton 底层 DOM 节点 button 的 ref
        // 当 ref （ref这里指button）挂载完成，ref.current 将指向 <button> DOM 节点。
        console.log(this.buttonRef);
    }
    render() {
        return <FancyButton ref={this.buttonRef}>Click Me!</FancyButton>;
    }
}

export default App;
