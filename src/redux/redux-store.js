import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;