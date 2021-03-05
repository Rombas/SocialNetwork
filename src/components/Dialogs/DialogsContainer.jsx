import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageAreaActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const updateMessageArea = (newMessage) => {
        props.store.dispatch(updateMessageAreaActionCreator(newMessage));
    }

    return <Dialogs addMessageAction={addMessage} updateMessageAreaAction={updateMessageArea}
                    newMessageText={state.dialogsPage.newMessageText}
    dialogs={state.dialogsPage.dialogs}
    messages={state.dialogsPage.messages}/>
}

export default DialogsContainer;