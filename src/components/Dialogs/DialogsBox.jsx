import React from "react";
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'message'} component={'textarea'} placeholder={'enter your message'} type={'text'}/>
        </div>
        <div>
            <button>Send Message</button>
        </div>
    </form>
}

const DialogsReduxForm = reduxForm({form: 'dialog'})(DialogsForm)

const DialogsBox = (props) => {

    const onSubmit = (values) => {
        props.addMessage(values.message)
    }

    return (
        <div className={s.dialogs}>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default DialogsBox;