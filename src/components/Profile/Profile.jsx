import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}></Redirect>
    return (
        <div className={c.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
};

export default Profile;