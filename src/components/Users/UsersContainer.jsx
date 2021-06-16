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
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingToggleList: state.usersPage.followingToggleList,
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