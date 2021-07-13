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
import {UsersType} from "../../type/types";
import {ReduxStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number,
    usersCount: number,
    currentPage: number,
    isFetching: boolean,
    portionSize: number
    followingToggleList: Array<number>,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsers: (users: UsersType) => void,
    setUsersCount: (count: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (pageSize: number) => void,
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersClassContainer extends React.Component<PropsType> {

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

const mapStateToProps = (state: ReduxStateType) => {
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

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStateType>(mapStateToProps, {
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