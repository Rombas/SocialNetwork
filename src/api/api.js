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
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
}




