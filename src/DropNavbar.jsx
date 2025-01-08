import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import DropdownNavig from './DropdownNavig.js';
import Dropdownhed from './Dropdownhed';
const DropNavbar=()=>{
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDrop=()=>{
    setDropdown(!dropdownOpen);
  }
    return (
        <Container fluid className='position-relative'>
          <nav className="navbar-wrapper">
            <Link to="/" className="logo">
              Tryox
            </Link>
            <ul className="nav-menu">
            <li className="nav-item" onMouseEnter={toggleDropdown}  onMouseLeave={toggleDropdown} >
            <Link to="/" className="nav-link">Home</Link>
            {isDropdownOpen && <DropdownNavig></DropdownNavig>}
          </li>
          <li className="nav-items-1"  onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>
            <Link to="/" className="nav-link">About Us</Link>
            {dropdownOpen && <Dropdownhed></Dropdownhed>}
           </li>
           <li><Link className="nav-link">Contact Us</Link></li>
                </ul>
            </nav>
            </Container>
            );

}
export default DropNavbar;