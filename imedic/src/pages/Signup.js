import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';

class Signup extends Component {

  state = {
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const name = this.state.name;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;

    auth.signup({ username, name, lastname, email, password })
      .then( (user) => {
        this.setState({
            username: "",
            name: "",
            lastname: "",
            email: "",
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
    const { username, name, lastname, email, password } = this.state;
    return (
      <div id="init-box">
      <h1 className="welcome-title">Welcome</h1>
        <form onSubmit={this.handleFormSubmit} className="init-form">
          <input className="register-input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username"/><br />
          <input className="register-input" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name"/><br />
          <input className="register-input" type="text" name="lastname" value={lastname} onChange={this.handleChange} placeholder="Last Name"/><br />
          <input className="register-input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email"/><br />
          <input className="register-input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/><br />
          <input className="register-button"type="submit" value="Signup" />
        </form>
        <p className="init-form">Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default Signup;
