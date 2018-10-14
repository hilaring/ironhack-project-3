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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label><br />
          <input type="text" name="username" value={username} onChange={this.handleChange}/><br />
          <label>Name:</label><br />
          <input type="text" name="firstName" value={name} onChange={this.handleChange}/><br />
          <label>Last name:</label><br />
          <input type="text" name="lastName" value={lastname} onChange={this.handleChange}/><br />
          <label>Email:</label><br />
          <input type="email" name="email" value={email} onChange={this.handleChange}/><br />
          <label>Password:</label><br />
          <input type="password" name="password" value={password} onChange={this.handleChange} /><br />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;