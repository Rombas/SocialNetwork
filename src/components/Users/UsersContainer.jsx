import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {dispatch(followAC(usersID))},
        unfollow: (usersID) => {dispatch(unfollowAC(usersID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage : (page) => {dispatch(setCurrentPageAC(page))},
        setUsersCount : (count) => {dispatch(setUsersCountAC(count))}

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;