import React, { useRef, useEffect } from 'react';

// useRef 返回一个可变的 ref 对象
export function UseRef() {
    const inputRef = useRef(null);
    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.focus();
    };
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={() => handleClick()}>click</button>
        </>
    );
}

// 「ref」 对象是一个 current 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性
// useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象
export function Timer() {
    const intervalRef = useRef(null);
    useEffect(() => {
        const timerId = setInterval(() => {
            console.log('ss');
        }, 1000);
        intervalRef.current = timerId;
        return () => {
            clearInterval(timerId);
        };
    });
    const handleCanel = () => {
        clearInterval(intervalRef.current);
    };
    return (
        <>
            <button onClick={() => handleCanel()}>cancel interval</button>
        </>
    );
}

// https://react.docschina.org/docs/hooks-reference.html#useref
