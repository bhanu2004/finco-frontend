import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logo from "./Images/Logo.png"




export default function Navbar({name}) {
  // HamBurger
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // Dropdown
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };




  return (
    <>
      <nav className="navbar">
        <NavLink to='/' className='navbar-logo'>
          <img className='logo' src='./images/logo4.png' alt="COLLECTIONS HUB" height={130} />
          <h2>Finco</h2>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to="/" className='nav-links'  onClick={closeMobileMenu}>
              Guide
            </NavLink>
          </li>
          <li className='nav-item' >
            <NavLink to='/Consultancy' className='nav-links'  >
            Counsultation
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/AboutUs' className='nav-links'  onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className='nav-item nav-links'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {/* <NavLink to='/Accessories'  onClick={closeMobileMenu}> */}
              Calculator
            {/* </NavLink> */}
             {dropdown && <Dropdown />}
          </li>
        </ul>
        < div className='Profile'>
        <i className="fa fa-user-circle" />
        <NavLink to={name ?'/profile' : '/singup-login'} className='nav-links' onClick={closeMobileMenu}>
              {name ? name: "Login"}
            </NavLink>
        </div>
      </nav>
    </>
  )
}