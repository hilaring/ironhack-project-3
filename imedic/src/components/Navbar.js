import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Menu = styled.div`
  padding: 0.5em;
  font-size: 16px;
  color: white;
  background: #1D1E22;
  border: none;
  max-width: 100px;
  height: 100%;
  
`;

export default class Navbar extends Component {

  render() {
    const { isLogged, user, logoutUser } = this.props;
    const { name } = user;
    return (
      <Menu>
        { isLogged ? 
        <div>
            <p>Hi { name }!</p>
            <div id="logout">
            <p onClick={logoutUser} className="menu-link">Logout</p>
            </div>
        </div> : <div id="log">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        }
      </Menu>
    )
  }
}
