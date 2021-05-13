import React, { useState, useEffect, Component } from 'react';
//import FriendStatusCls from './class3.jsx';
//import FriendStatus from './class3.jsx';
import { FriendStatus, FriendListItem } from './CustomRules.jsx';
import ChatAPI from './ChatAPI.js';

window.ChatApi = new ChatAPI();

// export default function App() {
//     const [id, setId] = useState('001');
//     window.SetUser = setId;
//     console.log('app render');
//     return (
//         <div>
//             <FriendStatusCls id={id}></FriendStatusCls>
//         </div>
//     );
// }

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleSetUser = this.handleSetUser.bind(this);
        this.state = {
            id: '001',
            name: 'Tom'
        };
    }
    handleSetUser(id, name = 'Tom') {
        this.setState((state) => ({
            id,
            name
        }));
    }
    componentDidMount() {
        window.SetUser = this.handleSetUser;
    }
    render() {
        return (
            <>
                <p>user:{this.state.id}</p>
                <FriendStatus friend={this.state}></FriendStatus>
                <FriendListItem friend={this.state}></FriendListItem>
            </>
        );
    }
}
