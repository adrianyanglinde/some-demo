import React, { Component } from 'react';

function logProps(WrappedComponent) {
    class WithlogProps extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount(preProps) {
            console.log('preProps:', preProps);
            console.log('newProps:', this.props);
        }
        render() {
            // refs 将不会透传下去。这是因为 ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理。（所以这里取不到ref）
            const { forwardRef, ...restProps } = this.props;
            return <WrappedComponent {...restProps} ref={forwardRef}></WrappedComponent>;
        }
    }

    // 使用 React.forwardRef API 明确地将 refs 转发到内部的被包裹组件
    // 可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    function forwardRef(props, ref) {
        return <WithlogProps {...props} forwardRef={ref}></WithlogProps>;
    }

    // React.forwardRef 接受一个渲染函数，其接收 props 和 ref （截获ref）参数并返回一个 React 节点
    return React.forwardRef(forwardRef);
}

export default logProps;
