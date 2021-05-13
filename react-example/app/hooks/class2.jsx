import React, { Component } from 'react';

export class FriendStatus extends Component {
    constructor(props) {
        super(props);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state = {
            isOnline: null
        };
    }
    componentDidMount() {
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
    render() {
        const { isOnline } = this.state;
        if (isOnline === null) {
            return 'loading...';
        }
        return isOnline ? <div>online</div> : <div>offline</div>;
    }
}

export default FriendStatus;
