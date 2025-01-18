import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Select.css';
import DurgaCheck1 from './DurgaCheck1';
import DurgaCheck2 from './DurgaCheck2';
const DurgaSelect=()=>{
return(
    <Container>
         <Row>
            <Col lg={12} className='wrapper-text'>
            <h3 style={{color:'#0D98BA'}}>How did each listed author contribute?</h3>
                <p>Open the dropdown menu next to each author to select their contributions to work.Please note that all author
      must contrbute in accordance with <span style={{color:'#0D98BA'}}>ICMJE guidlines</span> in order to be listed as an author.</p>
                </Col>
                <Row className='text'>
                    
                <Col lg={6}>
                <ol>
        <li><h5 style={{textAlign:"left"}}>Durgaprasad B.Kadam</h5></li>
       </ol>
                </Col>
                
                <Col lg={6} className='custom'>
                <DurgaCheck1></DurgaCheck1>
                
                </Col>
            </Row>
            <Row className='text'>
                <Col lg={6} >
                <ol>
        <li><h5 style={{textAlign:"left"}}>A X. B</h5></li>
       </ol>
                </Col>
                <Col lg={6}>
                <DurgaCheck2></DurgaCheck2>
                </Col>
                </Row>
            
         </Row>
    </Container>
)
}
export default DurgaSelect;