import React, { Component } from 'react';

export class FriendStatusWithCounter extends Component {
    constructor(props) {
        super(props);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        // this.handleSetCount = this.handleSetCount.bind(this);
        this.state = {
            isOnline: null,
            count: 0
        };
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        window.ChatApi.subscribeToFriendStatus(this.props.id, this.handleStatusChange);
    }
    componentDidUpdate(prevProps, prevState) {
        // 通过跳过 Effect 进行性能优化
        if (prevState.count !== this.state.count) {
            console.log('componentDidUpdate');
            document.title = `You clicked ${this.state.count} times`;
        }
        // 为什么每次更新的时候都要运行 Effect
        window.ChatApi.unsubscribeToFriendStatus(prevProps);
        window.ChatApi.subscribeToFriendStatus(this.props.id, this.handleStatusChange);
    }
    componentWillUnmount() {
        window.ChatApi.unsubscribeToFriendStatus(this.props.id);
    }
    handleStatusChange(status) {
        this.setState(() => ({
            isOnline: status.isOnline
        }));
    }
    handleSetCount(count) {
        this.setState(() => ({
            count: count
        }));
    }
    render() {
        const { isOnline, count } = this.state;
        const countEle = () => (
            <div>
                count:{count}
                <button onClick={() => this.handleSetCount(count + 1)}>点击</button>
            </div>
        );
        const onlineEle = () => {
            if (isOnline === null) {
                return 'loading...';
            }
            return isOnline ? <div>online</div> : <div>offline</div>;
        };
        return (
            <>
                <p>user:{this.props.id}</p>
                {countEle()}
                {onlineEle()}
            </>
        );
    }
}

export default FriendStatusWithCounter;
