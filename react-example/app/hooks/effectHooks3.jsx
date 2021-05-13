import React, { useState, useEffect } from 'react';

// 使用多个 Effect 实现关注点分离
// 不相关逻辑分离到不同的 effect 中
export default function FriendStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    const [isOnline, setOnline] = useState(null);
    console.log(count);
    useEffect(() => {
        console.log('count effect');
        document.title = `You clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        function handleStatusChange(status) {
            setOnline(status.isOnline);
        }
        console.log('subscribe', props.id);
        window.ChatApi.subscribeToFriendStatus(props.id, handleStatusChange);
        return () => {
            console.log('unsubscribe', props.id);
            window.ChatApi.unsubscribeToFriendStatus(props.id);
        };
    }, [props.id]);

    // effect 不依赖于 props 或 state 中的任何值
    useEffect(() => {
        function doSomething() {
            console.log('hello');
        }
        doSomething();
    }, []);
    const countEle = () => (
        <div>
            count:{count}
            <button onClick={() => setCount(count + 1)}>点击</button>
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
            <p>user:{props.id}</p>
            {countEle()}
            {onlineEle()}
        </>
    );
}

// React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。
