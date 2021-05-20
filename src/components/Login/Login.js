import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authMeOnSite} from "../../redux/auth-reducer";

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'email'} component={'input'} type={'text'} placeholder={'Email'}/></div>
        <div><Field name={'password'} component={'input'} type={'text'} placeholder={'Password'}/></div>
        <div><label>Remember Me</label><Field name={'rememberMe'} component={'input'} type={'checkbox'}/></div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (values) => {
        props.authMeOnSite(values.email, values.password, values.rememberMe);
    }
    return <div>
        <h1>Login Page</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {authMeOnSite})(Login);