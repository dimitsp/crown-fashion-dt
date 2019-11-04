import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
// we need class component here because we have to store wa the user type in
export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }


    //it happen we some on click the submit putton
    handleSubmit = event =>{
        // prevent the default submit function  in html form to submit
        event.preventDefault();
        // clean up the state
        this.setState({email:'', password:''})
    }

    //is going to happen we some try to type in  we update the state
    handleChange = event =>{
        const {value, name} = event.target;
        // dynamicly set the property value
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                      
                        label='email' 
                        required 
                    />
                   
                    <FormInput 
                        name ='password'
                        type='password' 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                       
                        label='password' 
                        required 
                    />
                   
                    <div className='buttons'>
                         <CustomButton type="submit"> sign In </CustomButton>
                        {/* is Google sign in so this property will get past the 
                        value of true */}
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn > 
                             Sign in with Google 
                        </CustomButton>
                    </div>
                   
                </form>

            </div>
        );
    }
}
