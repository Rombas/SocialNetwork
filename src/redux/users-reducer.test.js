import usersReducer, {followSuccess} from "./users-reducer";

let state = {
    users: [
        {
            id: 1,
            followed: false
        }
    ],
    usersCount: 30,
    currentPage: 1,
    pageSize: 100,
    isFetching: false,
    isFollowing: false,
    followingToggleList: [],

};

test('user must be following', () => {
    const action = followSuccess(1)
    usersReducer(state, action)
    let user = state.users.filter(user => user.id === 1);
    expect(user.[0].followed).toBe(true)
});