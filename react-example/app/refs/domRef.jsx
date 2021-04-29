import React, { Component } from 'react';

export class domRef extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.inputRef = React.createRef();
    }
    handleClick() {
        console.log(this.inputRef); // Dom实例
        this.inputRef.current.focus();
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.handleClick()}>click</button>
            </>
        );
    }
}

export default domRef;
