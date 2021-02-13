import c from'./MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first postsElements', likesCount:20},
    ];
    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    return (
        <div>
            {postsElements}
        </div>
    )
};

export default MyPosts;