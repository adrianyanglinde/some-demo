import React, { Component, PureComponent } from 'react';

// PureComponent 仅仅会对新老 this.props.arr 的值进行简单的对比。(浅比较)
// 由于代码中handleClick 方法改变了同一个 arr 数组，使得新老 this.props.arr 比较的其实还是同一个数组。
export class CounterButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            arr: [1]
        };
    }
    handleClick() {
        // const arr = this.state.arr;
        // arr.push(2);
        // console.log(arr);
        // this.setState((state) => ({
        //     arr: arr
        // }));

        // 不可变数据
        // 不改变原本的对象，避免可变对象的产生
        this.setState((state) => ({
            arr: [...state.arr, 2]
        }));
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('this props', this.props);
    //     console.log('nextProps', nextProps);
    //     console.log('equal props', nextProps === this.props);

    //     console.log('this state', this.state);
    //     console.log('nextState', nextState);
    //     console.log('equal state', nextState === this.state);
    // }
    render() {
        console.log('CounterButton render');
        return (
            <>
                {this.state.arr.map((item) => {
                    return item;
                })}
                <button onClick={() => this.handleClick()}>添加</button>
            </>
        );
    }
}

export default CounterButton;
