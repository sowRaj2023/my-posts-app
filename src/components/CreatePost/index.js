import React, { Component } from 'react';
import './index.css';

class CreatePost extends Component {
    state = {
        username: '',
        title: '',
        image: '',
        description: '',
        id: null,
    };

    componentDidUpdate(prevProps) {
        const { currentPost } = this.props;
        const { currentPost: prevCurrentPost } = prevProps;

        if (currentPost !== prevCurrentPost) {
            this.setState({
                ...currentPost,
                id: currentPost.id,
            });
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.id) {
            this.props.onUpdatePost(this.state);
        } else {
            this.props.onAddPost(this.state);
        }
        this.setState({ username: '', title: '', image: '', description: '', id: null });
    };

    render() {
        const { username, title, image, description } = this.state;

        return (
            <form className="create-post" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={this.handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">{this.state.id ? 'Update Post' : 'Add Post'}</button>
            </form>
        );
    }
}

export default CreatePost;