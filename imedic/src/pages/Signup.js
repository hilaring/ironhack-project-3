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
      <div id="signup">
      <h1 class="register-title">Welcome</h1>
        <form onSubmit={this.handleFormSubmit} class="register">
          
          <input class="register-input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username"/><br />
          
          <input class="register-input" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name"/><br />
          
          <input class="register-input" type="text" name="lastname" value={lastname} onChange={this.handleChange} placeholder="Last Name"/><br />
        
          <input class="register-input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email"/><br />
     
          <input class="register-input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/><br />
          <input class="register-button"type="submit" value="Signup" />
        </form>
        <p id="signup">Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default Signup;
