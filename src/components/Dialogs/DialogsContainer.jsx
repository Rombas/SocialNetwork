import React from "react";
import {addMessageActionCreator, updateMessageAreaActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageAction: () => {dispatch(addMessageActionCreator())},
        updateMessageAreaAction: (newMessage) => dispatch(updateMessageAreaActionCreator(newMessage))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;