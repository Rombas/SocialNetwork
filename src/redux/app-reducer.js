import {userAPI} from "../api/api";
import {setAuthLoginInfo} from "./auth-reducer";

const SET_INITIALIZED_STATUS = 'SET-INITIALIZED-STATUS';


let initialState = {
    initializedStatus: false
};

const appReducer = (state = initialState, action) => {
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

export const setInitializedStatus = () => ({type: SET_INITIALIZED_STATUS});
export const isInitialized = () => (dispatch) => {
    userAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthLoginInfo(id, email, login, true));

        }
    }).then(() => {dispatch(setInitializedStatus())});
}

export default appReducer;