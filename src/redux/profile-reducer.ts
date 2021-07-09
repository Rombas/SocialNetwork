import {profileAPI} from "../api/api";
import {webcrypto} from "crypto";
import { PhotosType } from "../type/types";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_USER_PHOTOS = 'SET-USER-PHOTOS';


type InititalStateType = typeof initialState
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
let initialState = {
    newPostText: 'enter',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first posts', likesCount: 20},
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ' ',

};

const profileReducer = (state = initialState, action: any): InititalStateType => {
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
        case SET_USER_PHOTOS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }
        default:
            return state;
    }
}
type AddPostActionType = {
    type: typeof ADD_POST
    postText: string
}
export const addPostAction = (postText: string): AddPostActionType => ({type: ADD_POST, postText});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
type SetUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusType => ({type: SET_USER_STATUS, status});
type SetUserPhotosType = {
    type: typeof SET_USER_PHOTOS
    photos: PhotosType
}
export const setUserPhotos = (photos: PhotosType): SetUserPhotosType => ({type: SET_USER_PHOTOS, photos});
type UpdateTextAreaActionType = {
    type: typeof UPDATE_TEXT_AREA
    newText: string
}
export const updateTextAreaAction = (postText: string): UpdateTextAreaActionType => ({
    type: UPDATE_TEXT_AREA,
    newText: postText
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfileStatus(userId)
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (statusMessage: string) => async (dispatch: any) => {
    const response = profileAPI.setProfileStatus(statusMessage)
    if (response.data.resultCode === 0) dispatch(setUserStatus(statusMessage));
}
export const uploadPhoto = (photoFile: any) => async (dispatch: any) => {
    const response = await profileAPI.uploadPhoto(photoFile)
    if (response.data.resultCode === 0) dispatch(setUserPhotos(response.data.data.photos));
}


export default profileReducer;