import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineChevronRight } from "react-icons/md";
import './RadioArticle.css';
const RadioArticle=()=>{
    return(<Container>
        <div className="app-container">
   <header>
       <h6 style={{textAlign:'left'}}>Getting Started <span style={{textAlign:"center"}} className='arrow'><MdOutlineChevronRight/> </span>Competition</h6>
   </header>
   <section className="descript">
       <h1>Is this a channel article?</h1>
       <p>Hey,your orgainzation or department encouraged or directed you to publish in Cureus?If so,please click 'Yes' and check if they are listed below.Cureus channels offer departments and orgainzations a venue to showcase their research,highlight faculty and notify their community of upcoming events.<span className='text'>Click here to learn more.</span></p>
   <div className="radio-btn">
   <label>
       <input type="radio"  name="options"
             value="option1"></input> No,this is not a channel article.
   </label>
   </div>
<div className="radio-btn">
   <label>
       <input type="radio"  name="options"
             value="option1"></input> Yes,this is a channel article.
   </label>
   </div>
   <Row className="butt-content">
    <Col lg={6} sm={12}>
        <button className="but1">BACK</button>
    
    </Col>
    <Col lg={6} sm={12} className="buttons">
    <button className="but3">SAVE</button>
    <button className="but4">SAVE AND CONTINUE</button>
    </Col>
   </Row>
   </section>
  
   </div>
   </Container>

    );
}
export default RadioArticle;