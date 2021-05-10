import React from 'react';
import Mouse from './Mouse.jsx';

// 关于 render prop 一个有趣的事情是你可以使用带有 render prop 的常规组件来实现大多数高阶组件 (HOC)。
// 例如，如果你更喜欢使用 withMouse HOC而不是 <Mouse> 组件，你可以使用带有 render prop 的常规 <Mouse> 轻松创建一个
const withMouse = (Component) => {
    return class Temp extends React.Component {
        render() {
            return <Mouse render={(mouse) => <Component mouse={mouse} {...this.props}></Component>}></Mouse>;
        }
    };
};

// const withMouse = (Component) => {
//     return function temp(props) {
//         return <Mouse render={(mouse) => <Component mouse={mouse} {...props}></Component>}></Mouse>;
//     };
// };

export default withMouse;
