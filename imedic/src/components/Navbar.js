import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    const { isLogged, user, logoutUser } = this.props;
    const { name } = user;
    return (
      <div className="navbar">
        { isLogged ? <div>
            <p>Welcome { name }</p>
            <p onClick={logoutUser}>Logout</p>
          </div> : <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        }
      </div>
    )
  }
}
