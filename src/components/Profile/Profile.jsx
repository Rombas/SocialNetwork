import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
};

export default Profile;