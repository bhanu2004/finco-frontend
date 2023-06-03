import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logo from "./Images/Logo.png"




export default function Navbar({name}) {

  // Dropdown
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };




  return (
    <>
      <nav className="navbar">
        <NavLink to='/' className='navbar-logo'>
          <img className='logo' src='./images/logo4.png' alt="COLLECTIONS HUB" height={130} />
          <h2>Finco</h2>
        </NavLink>
       
        <ul className='nav-menu'>
          <li className='nav-item'>
            <NavLink to="/" className='nav-links'  >
              Guide
            </NavLink>
          </li>
          <li className='nav-item' >
            <NavLink to='/Consultancy' className='nav-links'  >
            Counsultation
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/AboutUs' className='nav-links'  >
              About Us
            </NavLink>
          </li>
          <li className='nav-item nav-links'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              Calculator
             {dropdown && <Dropdown />}
          </li>
        </ul>
        < div className='Profile'>
        <i className="fa fa-user-circle" />
        <NavLink to={name ?'/profile' : '/singup-login'} className='nav-links' >
              {name ? name: "Login"}
            </NavLink>
        </div>
      </nav>
    </>
  )
}