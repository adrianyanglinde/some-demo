import React, { Component, PureComponent } from 'react';

// PureComponent通过prop和state的浅比较来实现shouldComponentUpdate
export class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            isShow: false
        };
    }
    handleClick() {
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }
    changeState() {
        this.setState({
            isShow: true
        });
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('this props', this.props);
    //     console.log('nextProps', nextProps);
    //     console.log('equal props', nextProps === this.props);

    //     console.log('this state', this.state);
    //     console.log('nextState', nextState);
    //     console.log('equal state', nextState === this.state);
    // }
    render() {
        console.log('CounterButton render');
        return (
            <div>
                color:{this.props.color}
                记数：{this.state.counter}
                <button onClick={() => this.handleClick()}>记数</button>
                <button onClick={() => this.changeState()}>change show</button>
            </div>
        );
    }
}

export default CounterButton;
