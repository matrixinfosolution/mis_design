import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputEL from './InputEL.jsx';
import { IoPerson } from "react-icons/io5";
import './SignUpPage.css';
const SignUpPage=()=>{
return(
    <Container className='wrapper'>
    <Row className="wrapper-header">
        <Col sm={12} md={12} lg={12}>
            
            <h3>SignUp with your email address</h3>
            
        </Col>
        <Col sm={12} md={12} lg={12} className="input-box">
          <InputEL placeholder={"Email Address"} size="sm" endIcon={<IoPerson/>}></InputEL>  
        </Col>
        <Col sm={12} md={12} lg={12} className="form-group">
            <label className="checkbox-container">
                <input type="checkbox"/>Subscribe to our monthly newsletter
            </label>

        </Col>
        <Col sm={12} md={12} lg={12}>
            <button type="submit">Next</button>
        </Col>
        <Col sm={12} md={12} lg={12}>
            <p>Already have an account?SignIn</p>
        </Col>
    </Row>

    </Container>
)
}
export default SignUpPage;