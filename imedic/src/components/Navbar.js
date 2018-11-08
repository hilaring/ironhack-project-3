import React, { Component } from "react";
import styled from "styled-components";
import { IoIosLogOut } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import '../style/main.css';


const Menu = styled.div`
  text-align: center;
  font-size: 16px;
  color: black;
  background: #F7F7F7;
  border: none;
  max-width: 50px;
  height: 85vh;
  width: 60px;
`;

 class Navbar extends Component {
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
            <div className="nav-btn">
              <i><FaHome className="link" onClick="/"/></i>
            </div>
            <div className="nav-btn">
              <i><IoIosLogOut className="icons" onClick={logoutUser}/></i>            
            </div>
          </div>
          ) : (
          <div>
            
          </div>
        )}
      </Menu>
    );
  }
}

export default Navbar;