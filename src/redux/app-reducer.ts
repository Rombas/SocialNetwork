import {authAPI} from "../api/api";
import {setAuthLoginInfo, SetAuthLoginInfoActionType} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {ReduxStateType} from "./redux-store";

const SET_INITIALIZED_STATUS = 'SET-INITIALIZED-STATUS';

export type InitialStateType = {
    initializedStatus: boolean
}

let initialState: InitialStateType = {
    initializedStatus: false
};

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_STATUS: {
            return {
                ...state,
                initializedStatus: true,
            }
        }
        default:
            return state;
    }
}
type ActionTypes = SetInitializedStatusType | SetAuthLoginInfoActionType
type SetInitializedStatusType = {
    type: typeof SET_INITIALIZED_STATUS //SET-INITIALIZED-STATUS
}
export const setInitializedStatus = (): SetInitializedStatusType => ({type: SET_INITIALIZED_STATUS});

type ThunkActionType = ThunkAction<void, ReduxStateType, unknown, ActionTypes>
export const isInitialized = (): ThunkActionType => (dispatch) => {
    authAPI.me().then((response: any) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthLoginInfo(id, email, login, true));

        }
    }).then(() => {
        dispatch(setInitializedStatus())
    });
}

export default appReducer;