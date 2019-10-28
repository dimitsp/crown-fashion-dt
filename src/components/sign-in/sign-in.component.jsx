import React, { Component } from 'react'

// we need class component here because we have to store wa the user type in
export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    // prevent the default submit function to submit
    handleSubmit = event =>{
        event.preventDefault();

        // clean up the state
        this.setState({email:'', password:''})
    }

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
                    <input name ="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input name ="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Password</label>

                    <input type="submit" value="Submit Form"></input>
                </form>

            </div>
        )
    }
}
