import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogItems = props.state.dialogs.map(item => <DialogItem avatar={item.avatar} name={item.name} id={item.id}/>);
    const messagesItems = props.state.messages.map(item => <Message message={item.message} id={item.id}/>);
    let newMessage = React.createRef();
    const addMessage = () => {
        props.dispatch({type:'ADD-MESSAGE'});
    }

    const updateMessageArea = () => {
        props.dispatch({type:'UPDATE-MESSAGE-AREA', newText:newMessage.current.value});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={updateMessageArea} ref={newMessage} value={props.state.newMessageText}></textarea>
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