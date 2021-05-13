import ProfileStatus from '../ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>{props.profile.fullName}</div>
            <img src={props.profile.photos.small} alt={'small avatar'}/>
            <ProfileStatus status={props.status}/>
        </div>

    )
};

export default ProfileInfo;