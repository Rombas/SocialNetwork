import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, uploadPhoto} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileClassContainer extends React.Component {

    updateUserInfo(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userID
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.updateUserInfo()
    }
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.userID != this.props.match.params.userId)
            this.updateUserInfo()
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return <Profile profile={this.props.profile}
                        isAuth={this.props.isAuth}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        uploadPhoto={this.props.uploadPhoto}
                        isMyProfile={!this.props.match.params.userId}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userID: state.auth.id,

    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, uploadPhoto}),
    withRouter
)(ProfileClassContainer)