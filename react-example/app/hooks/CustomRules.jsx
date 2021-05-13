import React, { useState, useEffect } from 'react';

// 自定义Hooks

// 共享组件之间的状态逻辑
// 订阅某个好友的在线状态 需要将 friendID 作为参数 并返回这位好友的在线状态的原因。
function useFriendStatus(friendID) {
    const [isOnline, setOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setOnline(status.isOnline);
        }
        window.ChatApi.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            window.ChatApi.unsubscribeToFriendStatus(friendID);
        };
    }, [friendID]);
    return isOnline;
}

export function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return 'loading...';
    }
    return isOnline ? <div>online</div> : <div>offline</div>;
}

export function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'loading...';
    }
    return <div style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</div>;
}

// https://react.docschina.org/docs/hooks-custom.html

// TODO:自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。
