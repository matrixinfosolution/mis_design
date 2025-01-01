import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
const Footer=()=>{
    return(
     <Container fluid>
        <Row className='justify-content-baseline text'>
            <Col lg={3} md={4} sm={2} className="search">
                <h5>Join our newsletter to Keep upto date with us!</h5>
            
            
            </Col>
            <Col lg={9} md={8} sm={10} className="justify-content-end d-flex align-items-center gap-2">
              {/*  <Row> 
                <Col sm={3} lg={2} md={3}>*/}
                <input type="text" placeholder="Enter your email" className='search-input'></input>
                
               { /*</Col><Col sm={3} lg={2} md={4}>*/}
                <button type="submit" className="sea-button">Subscribe</button>
                
                </Col>
            

        </Row>
        <Row>
        <hr></hr>
        </Row>
        <Row className='justify-content-space-between btech '>
            <Col lg={2} md={2} sm={2} className='cat'>
            <h4>MaxWell</h4>
            <p>We growing up bussiness with personal all manager</p>
            </Col>
            <Col lg={10} md={10} sm={10} className="justify-content-end d-flex align-items-center room">
            <Row>
            <Col lg={5} md={6} className="foot">
            <p>Company</p>
                <p>Blog</p>
                <p>Career</p>
                <p>News</p>
            
            </Col>
            <Col lg={7} md={6}className='foot'>
            <p>Resources</p>
                <p>Documentation</p>
                <p>Papers</p>
                <p>Press Conference</p>
            
            </Col>

            </Row>
            
            </Col>
        </Row>
        <Row>
            <hr></hr>
        </Row>
        <Row>
            <Col lg={2} md={4} sm={2}>
                <p>@2023 Maxwell.Inc</p>
            </Col>
            <Col lg={10} md={8} sm={10} className="justify-content-end d-flex align-items-center">
                <Row>
                    <Col lg={5}>
            <p>Terms of Service</p>
            </Col>
            <Col lg={5}>
            <p>Privacy Policy</p>
            </Col>
            <Col lg={2}>
            <p>Cookies</p>
            </Col>
            </Row>
            </Col>
        </Row>
     </Container>
    )
}
export default Footer;