import React, { useState } from 'react';

// Hook 是什么？ Hook 是一个特殊的函数，它可以让你“钩入” React 的特性
export default function StateHooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            count:{count}
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    );
}

// 我们声明了一个叫 count 的 state 变量，然后把它设为 0。
// React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。我们可以通过调用 setCount 来更新当前的 count。

// React 怎么知道 useState 对应的是哪个组件，因为我们并没有传递 this 给 React
