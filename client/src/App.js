import React, { Component } from 'react';
import './css/App.css';
import Nav from './Nav';
import Login from './Login';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
    state = {users: []}

    componentDidMount() {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav></Nav>
                <Login></Login>
                {/*
                <h1>Users</h1>
                <div>
                    {this.state.users.map(user => 
                    <p key={user.id}>{user.username}</p>)
                    }
                </div>*/}

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
