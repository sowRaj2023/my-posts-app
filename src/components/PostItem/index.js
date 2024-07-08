import React from 'react';
import './index.css';

const PostItem = ({ postDetails, onEditPost, onDeletePost }) => {
    const { id, username, title, image, description, date } = postDetails;


    const handleEdit = () => {
        onEditPost(id);
    };
    const handleDelete = () => {
        onDeletePost(id);
    };





    return (
        <div className="post-item">

            <h3>{title}</h3>
            <p className="post-username">{username}</p>
            <p className="post-date">{new Date(date).toLocaleString()}</p>
            <img src={image} alt={title} className="post-image" />
            <p className="post-description">{description}</p>
            <div>

                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit} className="edit-button">Edit</button>
            </div>
        </div>
    );
};

export default PostItem;