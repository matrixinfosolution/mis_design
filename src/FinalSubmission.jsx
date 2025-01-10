import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineChevronRight } from "react-icons/md";
import './FinalSub.css';
import teact1 from './Images/teach.jpg';
const FinalSubmission=()=>{
    return(
  <Container className='app-container'>
    <header>
   <h6 style={{textAlign:'left'}}>Getting Started <span style={{textAlign:"center"}} className='arrow'><MdOutlineChevronRight/> </span>Article Type</h6>
    </header>
    <Row className='content'>
        <Col lg={6} md={12} sm={12} className="descrip">
        <h3>What type of article are you submitting?</h3>
        <p className='top-text1'>From orignal research to case study,we've got covered.We provide you with the appropriate template based on he selected article type.</p>
       <p className='top-text2'><strong>Make sure you select the correct article type!</strong>For example,case study with literature reviews should be submitted as case study,while systematic reviews and meta-analysis articles should be submitted as review articles.<span className='text'>Click hre for more information on selecting the correct article type</span></p>  
      <p className='top-text3'>Submitting to completition?Your article type selection my be limited due to complrtition rules.</p>
    
    <select>
            <option>Select Article Type</option>
        </select>
        <div className="buttons1">
        <button className="bitt1">Back</button>
        </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="image2">
            <Row>
                <Col lg={12}>
            <img src={teact1}></img>
            </Col>

            <Col lg={12} className="buttons_1">
            <button className='but3'>SAVE</button>
            <button className="but4">SAVE AND CONTINUE</button>
            </Col>
            </Row>
        </Col>
    </Row>
  </Container> 
    ); 
}
export default FinalSubmission;