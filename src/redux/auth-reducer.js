import {authAPI, userAPI} from "../api/api";

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
            }
        }
        default:
            return state;
    }
}

export const setAuthLoginInfo = (id, email, login, isAuth) => ({type: SET_LOGIN_INFO, data:{id, email, login, isAuth}});
export const getAuthLoginInfo = () => (dispatch) => {
    userAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthLoginInfo(id, email, login, true));
        }
    });
}
export const authMeOnSite = (email, password, rememberMe) => (dispatch) => {
    authAPI.authLogin(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {dispatch(getAuthLoginInfo());
        }
    });
}

export const disAuthMeOnSite = () => (dispatch) => {
    authAPI.authLogOut().then((response) => {
        if (response.data.resultCode === 0) {dispatch(setAuthLoginInfo(null, null, null, false));
        }
    });
}
export default authReducer;