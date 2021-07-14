import {followAPI, userAPI} from "../api/api";
import {PhotosType, UsersType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {ReduxStateType} from "./redux-store";
import {Dispatch} from "redux";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UsersType>,
    usersCount: 30,
    currentPage: 1,
    portionSize: 10,
    pageSize: 10,
    isFetching: false,
    isFollowing: false,
    followingToggleList: [] as Array<number>,

};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = FollowSuccessType | UnfollowSuccessType | SetUsersActionType | SetCurrentPageActionType |
    SetUsersCountActionType | ToggleIsFetchingActionType | ToggleIsFollowingActionType
type DispatchType = Dispatch<ActionsType>

type FollowSuccessType = {
    type: typeof FOLLOW
    userID: number
}
export const followSuccess = (userID: number): FollowSuccessType => ({type: FOLLOW, userID});

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userID: number
}
export const unfollowSuccess = (userID: number): UnfollowSuccessType => ({type: UNFOLLOW, userID});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

type SetUsersCountActionType = {
    type: typeof SET_USERS_COUNT
    usersCount: number
}
export const setUsersCount = (count: number): SetUsersCountActionType => ({type: SET_USERS_COUNT, usersCount: count});

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

type ToggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFollowing: boolean
    userID: number
}
export const toggleIsFollowing = (isFollowing: boolean, userID: number): ToggleIsFollowingActionType => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userID
});

type ThunkActionType = ThunkAction<void, ReduxStateType, unknown, ActionsType>

export const getUsers = (pageSize: number, page = 1): ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await userAPI.getUsers(pageSize, page)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
    }
}

const followUnfollowFlow =
    async (dispatch: DispatchType, userId: number, followUnfollow: any, actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
        dispatch(toggleIsFollowing(true, userId));
        const response = await followUnfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
    }

export const follow = (userId: number): ThunkActionType => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.follow, followSuccess)
    }
}
export const unfollow = (userId: number): ThunkActionType => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollow, unfollowSuccess)
    }
}

export default usersReducer;