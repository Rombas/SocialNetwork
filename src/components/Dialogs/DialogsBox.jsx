import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";

const DialogsForm = (props) => {

    return <div>
        <div>
            <textarea onChange={updateMessageArea} ref={newMessage} value={props.newMessageText}></textarea>
        </div>
        <div>
            <button onClick={addMessage}>Send Message</button>
        </div>
    </div>
}

const DialogsReduxForm = reduxForm({form: 'dialog'})(DialogsForm)

const DialogsBox = (props) => {

    const onSubmit = () => {

    }

    return (
        <div className={s.dialogs}>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default DialogsBox;