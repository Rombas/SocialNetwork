import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        });
    }

    getUsers = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then((response) =>
            this.props.setUsers(response.data.items));
    }

    render() {
        return <Users
            usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            getUsers={this.getUsers}

        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountAC(count))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);

export default UsersContainer;