import React, { Component } from 'react';
import DataSouce from './DataSouce.js';
const dataSource = new DataSouce();

function withDataSource(WrappedComponent, selectData) {
    return class newComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(dataSource, props)
            };
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}

export default withDataSource;
