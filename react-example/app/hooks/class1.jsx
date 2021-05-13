import React, { Component } from 'react';

export class FriendStatus extends Component {
    constructor(props) {
        super(props);
        // this.handleSetCount = this.handleSetCount.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
    handleSetCount(count) {
        this.setState(() => ({
            count: count
        }));
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                count:{count}
                <button onClick={() => this.handleSetCount(count + 1)}>点击</button>
            </div>
        );
    }
}

export default FriendStatus;
