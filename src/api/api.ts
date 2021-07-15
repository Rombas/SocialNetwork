import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";
import {UsersType} from "../type/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '4be8dcbe-a96b-47b2-adc7-fdd7ab65d62a'}
})

export enum ResultCodeEnum {
    success = 0,
    error = 1
}

type RegularResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type UserApiResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
export const userAPI = {
    getUsers(pageSize: number, page = 1) {
        return instance.get<UserApiResponseType>(`users?count=${pageSize}&page=${page}`).then(response => response.data);
    }
}

export const followAPI = {
    unfollow(userId: number) {
        return instance.delete<RegularResponseType>(`follow/${userId}`);
    },
    follow(userId: number) {
        return instance.post<RegularResponseType>(`follow/${userId}`);
    }
}
type UserIdProfileResponseType = ProfileType
type PhotoProfileResponseType = {
    data: {
        small: string | null
        large: string | null
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserIdProfileResponseType>(`profile/${userId}`).then(res => res.data);
    },
    setProfileStatus(statusMessage: string) {
        return instance.put<RegularResponseType>(`/profile/status`, {status: statusMessage}).then(res => res.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data);
    },
    uploadPhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        //add PhotoProfileResponseType
        return instance.put(`/profile/photo/`, formData).then(res => res.data);
    }
}

type MeAuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authAPI = {
    authLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<RegularResponseType>(`/auth/login`, {email, password, rememberMe}).then(res => res.data)
    },
    authLogOut() {
        return instance.delete<RegularResponseType>(`/auth/login`).then(res => res.data)
    },
    me() {
        return instance.get<MeAuthResponseType>(`auth/me`).then(res => res.data);
    }
}



