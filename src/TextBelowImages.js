import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import './TextBelowImages.css';
const TextBelowImages=()=>{
return(
    <div className="container">
    <Row className="justify-content-center">
      {/* Image with Tag Below */}
      <Col xs={12} sm={6} md={4} lg={12} className="image-column">
        <img
          src="https://via.placeholder.com/300"
          alt="Sample Image"
          className="image"
        />
        <div className="tag1">
          <p>WEB DESIGN</p><span>27 March, 2018</span>
        </div>
        <div className="text-overlay1">
        <p >PageDraw UI Builder Turns Your Website Design Mockup Into Code Automatically</p>
        </div>
      </Col>
    </Row>
  </div>

);
}
export default TextBelowImages;
