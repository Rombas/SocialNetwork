import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initialState = {
    newPostText: 'enter',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first posts', likesCount: 20},
    ],
    profile: null,
    status: ' ',

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_TEXT_AREA: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostAction = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
        dispatch(setUserStatus(response.data));
    });
}
export const updateUserStatus = (statusMessage) => (dispatch) => {
    profileAPI.setProfileStatus(statusMessage).then((response) => {
        if (response.data.resultCode === 0) dispatch(setUserStatus(statusMessage));
    });
}
export const updateTextAreaAction = (postText) =>
    ({type: UPDATE_TEXT_AREA, newText: postText});

export default profileReducer;