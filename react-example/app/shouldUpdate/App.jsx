import React, { Component, PureComponent } from 'react';
import CounterButton from './CounterButton.jsx';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue'
        };
    }
    handleClick() {
        this.setState((state) => ({
            color: 'red'
        }));
    }
    render() {
        return (
            <>
                <button onClick={() => this.handleClick()}>变色</button>
                <CounterButton color={this.state.color}></CounterButton>
            </>
        );
    }
}

export default App;
