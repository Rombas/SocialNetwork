import Post from './Post/Post';
import React from "react";
import AddPostBox from "./AddPostBox";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <AddPostBox addPostAction={props.addPostAction}></AddPostBox>
            <div>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;