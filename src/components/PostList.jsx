import React from 'react';
import PostItem from './PostItem';


class PostList extends React.Component{

    componentWillUnmount() {
        console.log('PostList Component was unmounted...');
    }

    componentDidMount() {
        console.log('PostList component was mounted!');
    }

    render() {
        console.log('PostList component rendered!');
        
        const { posts } = this.props;
        return (
            <div>
                {posts.map((post, index) => {
                    return <PostItem
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default PostList;