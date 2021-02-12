import MyPosts from './MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};

export default Profile;