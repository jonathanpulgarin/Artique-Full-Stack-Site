import React, { Component } from 'react';
import './css/Login.css';

class Login extends Component {
  state = {users: []}

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  loginRequest(userEmail, userPassword) {
    fetch('/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        })
      })
  }

  render() {
    return (
      <div className="login-main-container">
        <div className="login-container">
            {
                this.state.users.map(user => 
                <p key={user.id}>{user.username}</p>)
            }
            <form>
                <h1>Login to your account</h1>
                <input type="text" name="email" placeholder="Email"></input>
                <br></br>
                <input type="password" name="password" placeholder="Password"></input>
                <br></br>
                <button onClick={this.loginRequest("jonathanpulgarin@live.com","j2000311")}>Login</button>
            </form>
        </div>
      </div>
    );
  }
}

export default Login;
