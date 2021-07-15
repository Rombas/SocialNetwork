import {authAPI, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {ReduxStateType} from "./redux-store";

const SET_LOGIN_INFO = 'SET-LOGIN-INFO';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
};

export type InitialStateType = typeof initialState
const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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

type ActionTypes = SetAuthLoginInfoActionType

export type SetAuthLoginInfoActionType = {
    type: typeof SET_LOGIN_INFO,
    data: InitialStateType
}
export const setAuthLoginInfo =
    (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthLoginInfoActionType => ({
        type: SET_LOGIN_INFO,
        data: {id, email, login, isAuth}
    });

type ThunkActionType = ThunkAction<void, ReduxStateType, unknown, ActionTypes>

export const getAuthLoginInfo = (): ThunkActionType => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.success) {
        let {id, email, login} = data.data;
        dispatch(setAuthLoginInfo(id, email, login, true));
    }
}
export const authMeOnSite = (email: string, password: string, rememberMe: boolean): ThunkActionType =>
    async (dispatch) => {
        const data = await authAPI.authLogin(email, password, rememberMe)
        if (data.resultCode === ResultCodeEnum.success) {
            dispatch(getAuthLoginInfo());
        } else {
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: data.messages}))
        }
    }

export const disAuthMeOnSite = (): ThunkActionType => async (dispatch) => {
    const data = await authAPI.authLogOut()
    if (data.resultCode === ResultCodeEnum.success) {
        dispatch(setAuthLoginInfo(null, null, null, false));
    }
}
export default authReducer;