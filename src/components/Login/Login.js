import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authMeOnSite} from "../../redux/auth-reducer";
import {Input, required} from "../common/Forms/Forms";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'email'} component={Input}
                    validate={[required]}
                    type={'text'} placeholder={'Email'}/></div>
        <div><Field name={'password'} component={Input}
                    validate={[required]}
                    type={'password'} placeholder={'Password'}/></div>
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
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login Page</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {authMeOnSite})(Login);