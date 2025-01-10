import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineChevronRight } from "react-icons/md";
import './Submittion.css';
import teact from './Images/teach.jpg';
const Submittion=()=>{
return(
<Container>
<div className="app-container">
   <header>
   <h6 style={{textAlign:'left'}}>Getting Started <span style={{textAlign:"center"}} className='arrow'><MdOutlineChevronRight/> </span>Article Type</h6>
    </header> 
    <Row className='content'>
    <Col lg={6} md={6} sm={6}className="description">
        <h3>What type of article are you submitting?</h3>
        <p>From orignal research to case study,we've got covered.We provide you with the appropriate template based on he selected article type.</p>
       <p><strong>Make sure you select the correct article type!</strong>For example,case study with literature reviews should be submitted as case study,while systematic reviews and meta-analysis articles should be submitted as review articles.<span className='text'>Click hre for more information on selecting the correct article type</span></p>  
      <p>Submitting to completition?Your article type selection my be limited due to complrtition rules.</p>
    
    <select>
            <option>Select Article Type</option>
        </select>
        <div className="buttons1">
        <button className="bitt1">Back</button>
        </div>
    </Col>
    <Col lg={6}className="image1">
        <Row>
            <Col lg={12}>
    <img src={teact}></img>
    </Col>
    <Col lg={12}>
    <div className="button-container1">
        <button className="but3">SAVE</button>
        <button className="but4">SAVE AND CONTINUE</button>
        
    </div>
    </Col>
    </Row>
    </Col>
   
        

    </Row>
   
    
    </div>
    
</Container>
)

}
export default Submittion;