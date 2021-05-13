import React, { Component } from 'react';

export class Children extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Children render');
        return <p>user:{this.props.id}</p>;
    }
}

export default Children;
