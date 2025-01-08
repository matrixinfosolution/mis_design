import React,{useState} from 'react';
import { IoIosClose } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import img2 from './Images/image.jpg';
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import './Modal.css';
const Modal=()=>{
    const [isHovered, setIsHovered] = useState(false);
return(
    <Container fluid>
        
            
            <Row>
                <Col lg={9} md={9} sm={9}>
                <Row>
                <Col lg={4} md={4} sm={4}>
                <img src={img2} className='image'/>
                </Col>
                <Col lg={8} md={8} sm={8} className="text">
                    <h6>Elessi Knit</h6>
                    <p>$96.00</p>
                    <h6>SELECT OPTIONS</h6>

                </Col>
                </Row>
                </Col>
                <Col lg={3} md={3} sm={3}>
                    <div className="overlay-container">
    
                <IoCloseOutline  className="overlay-button"
        onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} />
                
                {isHovered && <div className="overlay-tooltip">Remove</div>}
                </div>
                </Col>
            </Row>
           
            </Container>
    
)
}
export default Modal;