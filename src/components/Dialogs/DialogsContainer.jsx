import {addMessageAction, updateMessageAreaAction} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {addMessageAction, updateMessageAreaAction} )(Dialogs));

export default DialogsContainer;