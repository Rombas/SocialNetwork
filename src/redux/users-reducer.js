import {followAPI, userAPI} from "../api/api";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';


let initialState = {
    users: [],
    usersCount: 30,
    currentPage: 1,
    portionSize: 10,
    pageSize: 10,
    isFetching: false,
    isFollowing: false,
    followingToggleList: [],

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        user.followed = true
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        user.followed = false
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                usersCount: action.usersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingToggleList: action.isFollowing ?
                    [...state.followingToggleList, action.userID] :
                    state.followingToggleList.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, usersCount: count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowing = (isFollowing, userID) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userID});

export const getUsers = (pageSize, page = 1) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        userAPI.getUsers(pageSize, page).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
        });
    }
}

const followUnfollowFlow = (dispatch, userId, followUnfollow, actionCreator) => {
    dispatch(toggleIsFollowing(true, userId));
    followUnfollow(userId).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
    });
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.follow, followSuccess)
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollow, unfollowSuccess)
    }
}

export default usersReducer;