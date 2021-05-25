import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'} placeholder={'enter your post'} component={'textarea'} name={'postMessage'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

const AddPostBox = (props) => {
    const onSubmit = (values) => {
        props.addPostAction(values.postMessage)
    }
    return <AddPostReduxForm onSubmit={onSubmit}/>
}

export default AddPostBox;