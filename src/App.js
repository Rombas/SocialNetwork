import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React, {Suspense} from 'react';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {isInitialized} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<{}> {
    componentDidMount() {
        this.props.isInitialized();
    }

    render() {
        if (!this.props.initializedStatus) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                            return (
                                <Suspense fallback={<div>Загрузка...</div>}>
                                    <DialogsContainer/>
                                </Suspense>
                            )
                        }}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>

                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initializedStatus: state.app.initializedStatus
    }
}

export default connect(mapStateToProps, {isInitialized})(App);