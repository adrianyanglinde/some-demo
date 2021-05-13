import React, { useState, useEffect } from 'react';

// 自定义Hooks

// 共享组件之间的状态逻辑
// 订阅某个好友的在线状态 需要将 friendID 作为参数 并返回这位好友的在线状态的原因。
function useFriendStatus() {}

export function FriendStatus(props) {
    const [isOnline, setOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setOnline(status.isOnline);
        }
        window.ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            window.ChatApi.unsubscribeToFriendStatus(props.friend.id);
        };
    }, [props.friend.id]);

    if (isOnline === null) {
        return 'loading...';
    }
    return isOnline ? <div>online</div> : <div>offline</div>;
}

export function FriendListItem(props) {
    const [isOnline, setOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setOnline(status.isOnline);
        }
        window.ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            window.ChatApi.unsubscribeToFriendStatus(props.friend.id);
        };
    }, [props.friend.id]);

    if (isOnline === null) {
        return 'loading...';
    }
    return <div style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</div>;
}
