import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,

    }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileClassContainer)

export default ProfileContainer;