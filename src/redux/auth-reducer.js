import {userAPI} from "../api/api";

const SET_LOGIN_INFO = 'SET-LOGIN-INFO';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_INFO: {
            return {
                ...state,
                ...action.data,
                isAuth: true,

            }
        }
        default:
            return state;
    }
}

export const setAuthLoginInfo = (id, email, login) => ({type: SET_LOGIN_INFO, data:{id, email, login }});
export const getAuthLoginInfo = () => (dispatch) => {
    userAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthLoginInfo(id, email, login));
        }
    });
}

export default authReducer;