import c from'./MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = () => {
    const postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount:20},
    ];
    return (
        <div>
            My posts
            <Post message='Hi, how are you?' likeCount='15'/>
            <Post message='It is my first post' likeCount='20' />
        </div>
    )
};

export default MyPosts;