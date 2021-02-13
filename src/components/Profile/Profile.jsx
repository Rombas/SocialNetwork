import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first postsElements', likesCount:20},
    ];
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
};

export default Profile;