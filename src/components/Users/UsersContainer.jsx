import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import preloader from '../../assets/images/grid.svg'
import Preloader from "../common/Preloader/Preloader";

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        });
    }

    getUsers = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });


    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                getUsers={this.getUsers}
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);

export default UsersContainer;