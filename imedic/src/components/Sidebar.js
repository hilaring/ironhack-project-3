
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/patients" className="menu-item"> 
          Patients
        </Link>
        <Link to="/info" className="menu-item"> 
          Info
        </Link>
      </Menu>
  
    )
  }
}
export default Sidebar;