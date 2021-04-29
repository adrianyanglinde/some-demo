import React, { Component } from 'react';
import TextInput from './domRef.jsx';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.textInput = React.createRef();
    }
    componentDidMount() {
        console.log(this.textInput.current); // React实例
        this.textInput.current.handleClick();
    }
    render() {
        return (
            <>
                classRef
                <TextInput ref={this.textInput}></TextInput>
            </>
        );
    }
}

export default App;
