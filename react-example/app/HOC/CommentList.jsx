import React, { Component } from 'react';
import DataSouce from './DataSouce.js';

const dataSource = new DataSouce();

export class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: dataSource.getCommentList(props.pid)
        };
    }
    render() {
        return (
            <ul>
                {this.state.comments.map((item, index) => (
                    <li key={index}>{item.comment}</li>
                ))}
            </ul>
        );
    }
}

export default CommentList;
