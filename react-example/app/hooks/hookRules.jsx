import React, { useState, useEffect } from 'react';

export default function HookRules() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    //if (name !== '') {   // Hook 违反第一条规则
    useEffect(function persistForm() {
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });
    //}

    window.setName = setName;

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });
    return (
        <div>
            <p>name:{name}</p>
            <p>surname:{surname}</p>
        </div>
    );
}

// 那么 React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。
// https://react.docschina.org/docs/hooks-rules.html
