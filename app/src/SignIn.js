import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/SignIn.css';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            postReq: ""
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        //.then((res) => res.json())
        //.then((username) => {console.log(username);});
        event.preventDefault();
    }

    render() {
        return (
        <div className="sign-in-container">
            <form onSubmit={this.handleSubmit}>
                <h1>Sign in to your account</h1>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} name="email" placeholder="Email"></input>
                <input type="password" value={this.state.password} name="password" onChange={this.handlePasswordChange} placeholder="Password"></input>
                <br></br>
                <button type="submit" value="Submit">Login</button>
                <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                <p>{this.state.postReq}</p>
            </form>
        </div>
        );
    }
}

export default SignIn;
