import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                Dialogs
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi HI</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}

export default Dialogs;