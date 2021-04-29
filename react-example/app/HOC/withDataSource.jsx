import React, { Component } from 'react';
import DataSouce from './DataSouce.js';
const dataSource = new DataSouce();

function withDataSource(WrappedComponent, selectData) {
    class newComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(dataSource, props)
            };
        }
        render() {
            const { data, ...otherProps } = this.props;
            return <WrappedComponent data={this.state.data} {...otherProps} />;
        }
    }
    newComponent.displayName = `withDataSource${getDisplayName(WrappedComponent)}`;
    return newComponent;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withDataSource;

// 请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。
// 相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。

// 被包装组件接收来自容器组件的所有 prop，同时也接收一个新的用于 render 的 data prop。
// HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。

// 因为 withDataSource 是一个普通函数，你可以根据需要对参数进行增添或者删除。
// 例如，您可能希望使 data prop 的名称可配置，以进一步将 HOC 与包装组件隔离开来。
// 或者你可以接受一个配置 shouldComponentUpdate 的参数，或者一个配置数据源的参数。
// 因为 HOC 可以控制组件的定义方式，这一切都变得有可能。

// 与组件一样，withDataSource 和包装组件之间的契约完全基于之间传递的 props(本例的契约props data)。
// 这种依赖方式使得替换 HOC 变得容易，只要它们为包装的组件提供相同的 prop 即可。
// 例如你需要改用其他库来获取数据的时候，这一点就很有用。
