class DataSource {
    getCommentList(pid) {
        console.log(pid);
        return [
            {
                id: 1,
                comment: 'xxxx'
            }
        ];
    }

    getBlogPost() {
        return 'BlogPost';
    }
}

export default DataSource;
