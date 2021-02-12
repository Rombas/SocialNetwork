import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Piotr'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Helga'},
    ];
    const messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'HiHi'},
        {id: 4, message: 'Piotr'},
        {id: 5, message: 'Roman'},
        {id: 6, message: 'Helga'},
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                Dialogs
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Sasha' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hi Hi'/>
                <Message message='Hello'/>
            </div>
        </div>
    )
}

export default Dialogs;