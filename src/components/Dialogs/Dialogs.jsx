import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsBox from "./DialogsBox";

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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <DialogsBox> </DialogsBox>
            </div>

        </div>
    )
}

export default Dialogs;