import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {disAuthMeOnSite, getAuthLoginInfo} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,

    }
}

export default connect(mapStateToProps, {getAuthLoginInfo, disAuthMeOnSite})(HeaderContainer);