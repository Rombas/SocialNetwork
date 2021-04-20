import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileClassContainer));

export default ProfileContainer;