import c from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostText = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updateTextArea = () => {
        let postText = newPostText.current.value;
        props.dispatch(updateTextAreaActionCreator(postText));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={updateTextArea} ref={newPostText} value={props.newPostText}/>
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