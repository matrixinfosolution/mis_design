import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'; // Importing icons
import './AlterNavbar.css';
const AlterNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container fluid>
      {/* Icons (visible on larger screens, hidden on small screens) */}
      <Navbar.Brand href="#home" className="ml-1">Brand Name</Navbar.Brand>
      <Nav className="d-flex d-lg-none flex-row gap-2">
        <Nav.Link href="#home">
          <FaHome className="text-white mr-2" />
        </Nav.Link>
        <Nav.Link href="#contact">
          <FaPhoneAlt className="text-white mr-1" />
        </Nav.Link>
      </Nav>
      

      {/* Navbar Toggle for mobile */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      {/* Collapsible Navbar content */}
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* Centered Links on larger screens */}
        <Nav className="mx-auto d-block d-lg-flex">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        {/* Icons on the left for small screens */}
        <Nav className="ml-auto d-none d-lg-flex flex-row">
          <Nav.Link href="#home">
            <FaHome className="text-white" />
          </Nav.Link>
          <Nav.Link href="#about">
            <FaInfoCircle className="text-white" />
          </Nav.Link>
          <Nav.Link href="#contact">
            <FaPhoneAlt className="text-white" />
          </Nav.Link>
        </Nav>
      
    </Container>
  </Navbar>
  );
};

export default AlterNavbar;