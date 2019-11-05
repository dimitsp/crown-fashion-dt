import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        } 
    }

    //prevent default action
    handleSubmit = async event =>{
        event.preventDefault();

       // manualy google authentication actions see App.js
       const { displayName, email, password, confirmPassword } = this.state;

        if(!password.match(confirmPassword)){
            alert('passwords dont match');
            return;
        }
        try{
            //we use a new auth method that comes with the auth library.
            //create a new user account associated with the specified data
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            //wait first to finish
            await createUserProfileDocument(user, {displayName});
            //and then we gonne clean upthe state so setState to initial state
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.log(error);
        }
        
    };

    //we update the state
    handleChange = event =>{
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        //destructuring values fom ourState
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onScroll={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                   />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> Sign Up </CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignUp;