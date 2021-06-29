import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersFilter = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getUsersCount = (state) => {
    return state.usersPage.usersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingToggleList = (state) => {
    return state.usersPage.followingToggleList
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}