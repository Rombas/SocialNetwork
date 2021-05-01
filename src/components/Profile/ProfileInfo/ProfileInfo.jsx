const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' alt={'default avatar'}/>
            <div>{props.profile.fullName}</div>
            <img src={props.profile.photos.small} alt={'small avatar'}/>

        </div>

    )
};

export default ProfileInfo;