import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsBox from "./DialogsBox";

const Dialogs = (props) => {

    const dialogItems = props.dialogs.map(item => <DialogItem avatar={item.avatar} name={item.name} id={item.id}/>);
    const messagesItems = props.messages.map(item => <Message message={item.message} id={item.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <DialogsBox addMessage={props.addMessageAction}> </DialogsBox>
            </div>

        </div>
    )
}

export default Dialogs;