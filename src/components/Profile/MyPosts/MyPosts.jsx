import c from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostText = React.createRef();
    const addPost = () => {
        alert(newPostText.current.value)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;