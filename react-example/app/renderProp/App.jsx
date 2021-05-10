import React, { Component, PureComponent } from 'react';
import Mouse from './Mouse.jsx';
import withMouse from './withMouse.jsx';

// 这也是 render prop 的来历：
// 我们可以提供一个带有函数 prop 的 <Mouse> 组件，
// 它能够动态决定什么需要渲染的，而不是将 <Cat> 硬编码到 <Mouse> 组件里，并有效地改变它的渲染结果。

// render prop 是一个用于告知组件需要渲染什么内容的函数 prop

class Text extends React.Component {
    render() {
        return (
            <Mouse
                render={(mouse) => (
                    <p>
                        The current mouse position is x:{mouse.x},y:{mouse.y}
                    </p>
                )}
            ></Mouse>
        );
    }
}

// 呈现一张在屏幕上追逐鼠标的猫的图片
class Cat extends React.Component {
    render() {
        return (
            <Mouse
                render={(mouse) => (
                    <div>
                        <img style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
                        <p>
                            cat is x:{mouse.x},y:{mouse.y}
                        </p>
                    </div>
                )}
            ></Mouse>
        );
    }
}

const Text2 = ({ mouse }) => (
    <p>
        The current mouse position is x:{mouse.x},y:{mouse.y}
    </p>
);
const WithMouseText = withMouse(Text2);

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {/* <Text></Text> */}
                <WithMouseText />
                {/* <Cat></Cat> */}
            </>
        );
    }
}

export default App;

// 重要的是要记住，render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式。
// 事实上， 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
{
    /* <Mouse>
  {mouse => (
    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
  )}
</Mouse> */
}
