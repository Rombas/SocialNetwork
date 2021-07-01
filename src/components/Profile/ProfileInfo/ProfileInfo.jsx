import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import {Input} from "../../common/Forms/Forms";
import userPhoto from "../../../assets/images/images.png"

const ProfileInfo = (props) => {
    const uploadPhoto = (e) => {
        const photoFile = e.target.files[0];
        props.uploadPhoto(photoFile);
    }
    return (
        <div>
            <div>{props.profile.fullName}</div>
            <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt={'small avatar'}/>
            {props.isMyProfile && <div><input type='file' onChange={uploadPhoto}></input></div>}
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>

    )
};

export default ProfileInfo;