import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextOverImages.css';
import java from './Images/java.jpg';
import script from './Images/script.jpg';
const TextOverImages=()=>{
    return (
        <Container fluid>
            <Row>
                <Col lg={6} md={6} sm={12} className='p-4 container'>
                    
        
          <div className="image-container">
            <img
              className="image"
              src={java}
              alt="Placeholder"
            />
            
            <div className="tag-overlay">JAVASCRIPT</div>
            <div className="date">March 27,2018</div>
            <div className="text-overlay">Chrome Extension Protects Against Javascript based CPU Side-Channel Attacks</div>
            
          </div>
          </Col>
          <Col lg={6} md={6} sm={12} className='p-4 container'>
    
        <div className="image-container">
        <img
          className="image"
          src={script}
          alt="Image 2"
        />
        <div className="tag-overlay1">JQuery</div>
            <div className="date1">March 27,2018</div>
            <div className="text-overlay">Ask HN:Does Anybody Still Use JQuery</div>
      </div>
    
        </Col>
        </Row>
       
        </Container>
      );

}
export default TextOverImages;