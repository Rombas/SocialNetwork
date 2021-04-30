import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageAreaActionCreator} from "../../redux/dialog-reducer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    const dialogItems = props.dialogs.map(item => <DialogItem avatar={item.avatar} name={item.name} id={item.id}/>);
    const messagesItems = props.messages.map(item => <Message message={item.message} id={item.id}/>);
    let newMessage = React.createRef();
    const addMessage = () => {
        props.addMessageAction();
    }

    const updateMessageArea = () => {
        props.updateMessageAreaAction(newMessage.current.value);
    }
    if (!props.isAuth) return <Redirect to={'/login'}></Redirect>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={updateMessageArea} ref={newMessage} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;