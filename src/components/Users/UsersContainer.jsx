import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching, toggleIsFollowing,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingToggleList,
    getIsFetching,
    getPageSize, getPortionSize,
    getUsersCount, getUsersFilter,
} from "../../redux/users-selectors";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                getUsers={this.props.getUsers}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingToggleList={this.props.followingToggleList}
                isAuth={this.props.isAuth}
                portionSize={this.props.portionSize}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersFilter(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        portionSize: getPortionSize(state),
        followingToggleList: getFollowingToggleList(state),
        isAuth: state.auth.isAuth
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow,
    getUsers
})(UsersClassContainer);

export default UsersContainer;