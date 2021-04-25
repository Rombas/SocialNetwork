import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching, toggleIsFollowing,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import preloader from '../../assets/images/grid.svg'
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
        });
    }

    getUsers = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        userAPI.getUsers(this.props.pageSize, page).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });


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
                getUsers={this.getUsers}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingToggleList={this.props.followingToggleList}
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
        followingToggleList: state.usersPage.followingToggleList
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
})(UsersClassContainer);

export default UsersContainer;