import React from "react";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const updateTextArea = (postText) => {
        props.store.dispatch(updateTextAreaActionCreator(postText));
    }

    return <MyPosts updateTextAreaAction={updateTextArea} addPostAction={addPost}
                    posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer;