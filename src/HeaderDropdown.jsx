import React,{useState} from 'react';
import './Dropdown.css';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Dropdownhed.js';
import { Dropdown } from 'react-bootstrap';
import Dropdownhed from './Dropdownhed.js';
const HeaderDropdown=()=>{
    const [dropdown,setDropdown]=useState(true);
    return (
        <Container fluid>
          <nav className="navbar-wrapper">
            <Link to="/" className="logo">
              Tryox
            </Link>
            <ul className="nav-menu">
          <li onMouseEnter={()=>setDropdown(true)} >
            <Link to="/" className="nav-item-1" >Home</Link>
          {dropdown &&  <Dropdownhed></Dropdownhed>}
          </li>
          <li>
            <Link to="/about" className="nav-item">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact Us</Link>
          </li>
          </ul>
          </nav>
         
        </Container>
  );

}
export default HeaderDropdown;