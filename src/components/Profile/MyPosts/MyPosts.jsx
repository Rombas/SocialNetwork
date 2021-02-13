import c from'./MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    return (
        <div>
            {postsElements}
        </div>
    )
};

export default MyPosts;