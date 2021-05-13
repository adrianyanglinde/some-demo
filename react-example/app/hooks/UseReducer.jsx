import React, { useReducer } from 'react';

const initState = { count: 0 };

function reducer(state = initState, action) {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            state;
            break;
    }
}

export default function Counter() {
    // React 不使用 state = initialState 这一由 Redux 推广开来的参数约定。
    // 有时候初始值依赖于 props，因此需要在调用 Hook 时指定。
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            count:{state.count}
            <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
        </div>
    );
}

// TODO: useMemo useCallback 存在高开销的计算的函数，返回函数的memoized版本
