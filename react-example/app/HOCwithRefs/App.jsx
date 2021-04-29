import React, { Component } from 'react';
import logProps from './logProps.jsx';
import Test from './Test.jsx';

console.log(Test);
console.log(<Test></Test>);

// function FancyButton(props) {
//     return <button ref={props.forwardRef}>{props.children}</button>;
// }
const FancyButton = React.forwardRef((props, ref) => {
    return <button ref={ref}>{props.children}</button>;
});
FancyButton.displayName = 'FancyButton';

const FancyButtonWithLogProps = logProps(FancyButton);

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.buttonRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.buttonRef);
    }
    render() {
        // 如果你对 HOC 添加 ref，该 ref 将引用最外层的容器组件，而不是被包裹的组件。
        return (
            <>
                <FancyButtonWithLogProps ref={this.buttonRef}>click Me!</FancyButtonWithLogProps>
            </>
        );
    }
}

export default App;
