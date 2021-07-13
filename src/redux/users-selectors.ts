import {createSelector} from "reselect";
import {ReduxStateType} from "./redux-store";

const getUsers = (state: ReduxStateType) => {
    return state.usersPage.users
}

export const getUsersFilter = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: ReduxStateType) => {
    return state.usersPage.pageSize
}
export const getUsersCount = (state: ReduxStateType) => {
    return state.usersPage.usersCount
}
export const getCurrentPage = (state: ReduxStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: ReduxStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingToggleList = (state: ReduxStateType) => {
    return state.usersPage.followingToggleList
}
export const getPortionSize = (state: ReduxStateType) => {
    return state.usersPage.portionSize
}