import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    currentPost: {},
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3003/posts');
      const posts = await response.json();
      this.setState({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  handleDeletePost = async id => {
    try {
      const response = await fetch(`http://localhost:3003/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        this.setState(prevState => ({
          posts: prevState.posts.filter(post => post.id !== id),
        }));
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };





  handleAddPost = async newPost => {
    newPost.id = uuidv4();
    newPost.date = new Date();

    try {
      const response = await fetch('http://localhost:3003/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const post = await response.json();
      this.setState(prevState => ({
        posts: [...prevState.posts, post],
      }));
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  handleEditPost = id => {
    const post = this.state.posts.find(post => post.id === id);
    this.setState({ currentPost: post });
  };

  handleUpdatePost = async updatedPost => {
    try {
      const response = await fetch(`http://localhost:3003/posts/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      const post = await response.json();
      this.setState(prevState => ({
        posts: prevState.posts.map(p => (p.id === post.id ? post : p)),
        currentPost: {},
      }));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  render() {
    const { posts, currentPost } = this.state;

    return (
      <div className="app">
        <h1 className='heading'>Posts App</h1>
        <CreatePost onAddPost={this.handleAddPost} onUpdatePost={this.handleUpdatePost} currentPost={currentPost} />
        <PostsDisplay posts={posts} onEditPost={this.handleEditPost} onDeletePost={this.handleDeletePost} />
      </div>
    );
  }
}

export default App;
