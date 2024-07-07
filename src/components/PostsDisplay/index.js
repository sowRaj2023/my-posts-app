import React, { Component } from 'react';
import PostItem from '../PostItem';
import './index.css';

class PostsDisplay extends Component {
    render() {
        const { posts, onEditPost, onDeletePost } = this.props;

        return (
            <div className="posts-display">
                {posts.map(post => (
                    <PostItem key={post.id} postDetails={post} onEditPost={onEditPost} onDeletePost={onDeletePost} />
                ))}
            </div>
        );
    }
}

export default PostsDisplay;