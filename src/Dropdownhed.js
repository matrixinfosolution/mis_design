import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dropdownhed.css';
const Dropdownhed=()=>{
return(
<Container fluid>

<ul className="dropdown-menu">
    <Row>
        <Col lg={3} md={3} sm={12}>
    <li>
        <Link to="/" className="dropdown-item">Left Sidebar</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">Right Sidebar</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">No Sidebar</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">Filter List</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">Custom List</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">Masory List</Link>
        </li>
        <li>
        <Link to="/" className="dropdown-item">Gallary List</Link>
        
    </li>
    <li>
        <Link to="/" className="dropdown-item">Category List</Link>
        
    </li>
    </Col>
    </Row>
    
</ul>

</Container>
);
}
export default Dropdownhed;