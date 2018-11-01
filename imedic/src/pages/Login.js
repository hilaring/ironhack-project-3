import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.login({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div id="login">
      <h1 className="register-title">Welcome</h1>
        <form onSubmit={this.handleFormSubmit} className="register">
          <label></label>
          <input  className="register-input" type="text" name="username" value={username} onChange={this.handleChange}placeholder="Username"/>
          <label></label>
          <input  className="register-input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/>
          <input className="register-button" type="submit" value="Login" />
        </form>
        <p id="signup">Do not have account? 
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;
