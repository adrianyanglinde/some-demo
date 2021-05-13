import React, { useState, useEffect } from 'react';

// Effect Hook 可以让你在函数组件中执行副作用操作
export default function EffectHooks() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            count:{count}
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    );
}

// 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

// React 会保存你传递的函数（我们将它称之为 “effect”）
// useEffect 会在每次渲染后都执行
// Hook 使用了 JavaScript 的闭包机制

// 务必理解：https://react.docschina.org/docs/hooks-effect.html
