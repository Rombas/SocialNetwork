import cl from './Header.module.css';
import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthLoginInfo} from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthLoginInfo(id, email, login);
            }
        });
    }

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

export default connect(mapStateToProps, {setAuthLoginInfo})(HeaderContainer);