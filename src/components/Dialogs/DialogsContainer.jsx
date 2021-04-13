import React from "react";
import {addMessageAction, updateMessageAreaAction} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}


const DialogsContainer = connect(mapStateToProps, {addMessageAction, updateMessageAreaAction} )(Dialogs);

export default DialogsContainer;