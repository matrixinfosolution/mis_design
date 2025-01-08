import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownNav.css';
const DropdownNavig=()=>{
    return(
        <ul className="home-submenu">
                <li><Link to="/option1" className="dropdown-item">Home Main</Link></li>
                <li><Link to="/option2" className="dropdown-item">Home Fashion</Link></li>
                <li><Link to="/option3" className="dropdown-item">Home Store</Link></li>
              </ul>
    )
}
export default DropdownNavig;