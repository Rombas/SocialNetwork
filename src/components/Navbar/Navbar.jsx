import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            {/*<Friends state={props.state.friends} />*/}
        </nav>
    )
};

export default Navbar;