import {userAPI} from "../api/api";
import {setAuthLoginInfo} from "./auth-reducer";

const SET_INITIALIZED_STATUS = 'SET-INITIALIZED-STATUS';

export type InitialStateType = {
    initializedStatus: boolean
}

let initialState: InitialStateType = {
    initializedStatus: false
};

type action = {
    type: string
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type SetInitializedStatusType = {
    type: typeof SET_INITIALIZED_STATUS //SET-INITIALIZED-STATUS
}
export const setInitializedStatus = (): SetInitializedStatusType => ({type: SET_INITIALIZED_STATUS});
export const isInitialized = () => (dispatch: any) => {
    userAPI.me().then((response: any) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthLoginInfo(id, email, login, true));

        }
    }).then(() => {dispatch(setInitializedStatus())});
}

export default appReducer;