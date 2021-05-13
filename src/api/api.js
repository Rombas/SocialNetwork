import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '4be8dcbe-a96b-47b2-adc7-fdd7ab65d62a'}
})

export const userAPI = {
    getUsers(pageSize, page = 1) {
        return instance.get(`users?count=${pageSize}&page=${page}`).then(response => response.data);
    },
    unfollow(userId) {
        window.alert('Outdated method, please use followAPI');
        return followAPI.unfollow(userId);
    },
    follow(userId) {
        window.alert('Outdated method, please use followAPI');
        return followAPI.follow(userId);
    },
    getProfile(userId) {
        window.alert('Outdated method, please use profileAPI');
        return profileAPI.getProfile(userId);
    },
    me() {
        return instance.get(`auth/me`);
    }
}

export const followAPI = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    setProfileStatus(statusMessage) {
        return instance.put(`/profile/status`, {status: statusMessage})
    },
    getProfileStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    }
}



