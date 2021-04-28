import React, { Component } from 'react';
import DataSouce from './DataSouce.js';

const dataSource = new DataSouce();

export class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: dataSource.getBlogPost()
        };
    }
    render() {
        return <div>{this.state.blogPost}</div>;
    }
}

export default BlogPost;
