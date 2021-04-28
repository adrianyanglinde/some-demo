import React, { Suspense, lazy } from 'react';
// import BlogPost from './BlogPost.jsx';
// import CommentList from './CommentList.jsx';
import withDataSource from './withDataSource.jsx';

function CommentList({ data, pid }) {
    return (
        <ul className={`comment-list comment-list-${pid}`}>
            {data.map((item, index) => (
                <li key={index}>{item.comment}</li>
            ))}
        </ul>
    );
}

function BlogPost({ data }) {
    return <div className="blog-post">{data}</div>;
}

const CommentListWithDataSource = withDataSource(CommentList, (dataSource, props) =>
    dataSource.getCommentList(props.pid)
);
const BlogPostWithDataSource = withDataSource(BlogPost, (dataSource) => dataSource.getBlogPost());

function App() {
    return (
        <>
            <CommentListWithDataSource pid={1} />
            <BlogPostWithDataSource />
        </>
    );
}

export default App;
