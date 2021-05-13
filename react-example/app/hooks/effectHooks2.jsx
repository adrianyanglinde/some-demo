import React, { useState, useEffect } from 'react';
let count = 0;
export default function FriendStatus(props) {
    const [isOnline, setOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setOnline(status.isOnline);
        }
        count++;
        console.log('use effect' + count);
        window.ChatApi.subscribeToFriendStatus(props.id, handleStatusChange);
        return () => {
            console.log('clear effect' + count);
            window.ChatApi.unsubscribeToFriendStatus(props.id);
        };
    });

    console.log('render');
    if (isOnline === null) {
        return 'loading...';
    }
    return isOnline ? <div>online</div> : <div>offline</div>;
}
