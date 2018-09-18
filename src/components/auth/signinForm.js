import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SignupForm extends Component {
    render() {
        return (
            <form className="sign-in-form">
                <FormTitle className="sign-in-form__title" text="Login"/>
                
                
                <Field 
                    className="sign-in-form__fullname"
                    placeholder="Enter Your Full Name"
                    name="fullname" 
                    type="text"
                    title="Full Name"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__unit"
                    placeholder="Enter Unit #"
                    name="unit" 
                    type="text"
                    title="Unit #"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__email"
                    placeholder="Enter Email"
                    name="email" 
                    type="email"
                    title="Email"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__password"
                    placeholder="Enter Password"
                    name="password" 
                    type="password"
                    title="password"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__create-account"
                    name="createaccount" 
                    type="submit"
                    title="Create Account"
                    component={FormButton}
                />
                <div className='sign-in-form__text-links'>
                    <TextLink to='/signin' text='Already Registered? Login'/>
                </div>
                
            </form>
        );
    }
}

Signinform = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;