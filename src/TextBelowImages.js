import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import './TextBelowImages.css';
const TextBelowImages=()=>{
return(
    <div className="container">
    <Row className="justify-content-center">
      {/* Image with Tag Below */}
      <Col xs={12} sm={12} md={4} lg={6} className="image-column">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/652/447/non_2x/close-up-business-woman-using-calculator-and-laptop-for-do-math-finance-on-wooden-desk-in-office-and-business-working-background-tax-accounting-statistics-and-analytic-research-concept-free-photo.jpg"
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
      <Col xs={12} sm={12} md={4} lg={6} className="image-column">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzv0KcWaPBdVXiP9uobAvt5tDURGE66qczTA&s"
          alt="Sample Image"
          className="image"
        />
        <div className="tag2">
          <p>JAVASCRIPT</p><span>27 March, 2018</span>
        </div>
        <div className="text-overlay1">
        <p>Chrome Extension Protects Against Javascript-Based CPU Side-Channel Attacks</p>
        </div>
      </Col>
    </Row>
  </div>

);
}
export default TextBelowImages;
