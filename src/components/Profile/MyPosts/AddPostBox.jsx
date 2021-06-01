import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, Textarea} from "../../common/Forms/Forms";



const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'} placeholder={'enter your post'}
                       validate={[required]}
                       component={Textarea} name={'postMessage'}/>
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