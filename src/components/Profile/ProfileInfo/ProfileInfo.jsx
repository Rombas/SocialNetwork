import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>{props.profile.fullName}</div>
            <img src={props.profile.photos.small} alt={'small avatar'}/>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>

    )
};

export default ProfileInfo;