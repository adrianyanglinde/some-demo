import React, { useState, useEffect, Component } from 'react';
import Children from './children.jsx';

// export default function App() {
//     const [id, setId] = useState('001');
//     console.log('App render');
//     return (
//         <div>
//             <button onClick={() => setId('002')}>变用户002</button>
//             <Children id={id}></Children>
//         </div>
//     );
// }

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleSetUser = this.handleSetUser.bind(this);
        this.state = {
            id: '001'
        };
    }
    handleSetUser(id) {
        this.setState((state) => ({
            id: id
        }));
    }
    render() {
        console.log('App render');
        return (
            <>
                <button onClick={() => this.handleSetUser('002')}>变用户002</button>
                <Children id={this.state.id}></Children>
            </>
        );
    }
}
