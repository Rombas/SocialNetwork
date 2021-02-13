import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogs = [
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

    const dialogItems = dialogs.map(item => <DialogItem name={item.name} id={item.id}/>);
    const messagesItems = messageData.map(item => <Message message={item.message} id={item.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;