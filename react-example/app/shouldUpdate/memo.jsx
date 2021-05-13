import React, { Component, PureComponent } from 'react';

// React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件

function MyComponent(props) {
    console.log('MyComponent render');
    return (
        <>
            <div>value:{props.color.name}</div>
        </>
    );
}

function areEqual(prevProps, nextProps) {
    /*
        如果把 nextProps 传入 render 方法的返回结果与
        将 prevProps 传入 render 方法的返回结果一致则返回 true，
        否则返回 false
    */
}
const MyComponentMemo = React.memo(MyComponent);

let colorObj = {
    name: 'blue'
};

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: colorObj
        };
    }
    handleClick() {
        colorObj.name = 'red';
        this.setState((state) => ({
            color: colorObj
        }));
    }
    render() {
        console.log('App render');
        return (
            <>
                <button onClick={() => this.handleClick()}>变色</button>
                <MyComponentMemo color={this.state.color}></MyComponentMemo>
            </>
        );
    }
}

export default App;
