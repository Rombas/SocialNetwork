import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers);

export default store;