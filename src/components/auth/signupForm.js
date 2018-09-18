import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SignupForm extends Component {
    render() {
        return (
            <form className="sign-in-form">
                <FormTitle className="sign-up-form__title" text="New User"/>
                <Field 
                    className="sign-up-form__email"
                    placeholder="Enter Email"
                    name="email" 
                    type="email"
                    title="Email"
                    component={FormInput}
                />
                <Field 
                    className="sign-up-form__password"
                    placeholder="Enter Password"
                    name="password" 
                    type="password"
                    title="password"
                    component={FormInput}
                />
                <Field 
                    className="sign-up-form__login"
                    name="login" 
                    type="submit"
                    title="Login"
                    component={FormButton}
                />
                <div className='sign-up-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Not a member? Register here'/>
                </div>
                
            </form>
        );
    }
}

Signupform = reduxForm({
    form: "signup"
})(SignupForm);

export default SignupForm;