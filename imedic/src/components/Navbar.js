import React, { Component } from "react";
import styled from "styled-components";
import { IoIosLogOut } from 'react-icons/io';
import '../style/main.css';

const Menu = styled.div`
  text-align: center;
  font-size: 16px;
  color: white;
  background: #26272B;
  border: none;
  max-width: 50px;
  height: 95vh;
  width: 60px;
`;

export default class Navbar extends Component {
  render() {
    const { isLogged, user, logoutUser } = this.props;
    const { name } = user;
    return (
      <Menu>
        {isLogged ? (
          <div className="nav-bar">
            <div>
              <p className="name-navbar">Hi {name}!</p>
            </div>
            <div>
                <i><IoIosLogOut className="icons" onClick={logoutUser}/></i>            
            </div>
          </div>
        ) : (
          <div id="log">
            
          </div>
        )}
      </Menu>
    );
  }
}
