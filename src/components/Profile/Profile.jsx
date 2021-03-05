import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
};

export default Profile;