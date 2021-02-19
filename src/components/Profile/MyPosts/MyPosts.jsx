import c from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    debugger;
    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostText = React.createRef();

    const addPost = () => {
        props.dispatch({type:'ADD-POST'})
    }

    const updateTextArea = () => {
        let postText = newPostText.current.value;
        props.dispatch({type:'UPDATE-TEXT-AREA', newText: postText});
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