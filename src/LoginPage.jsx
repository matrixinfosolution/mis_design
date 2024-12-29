import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputEL from './InputEL.jsx';
import './LoginPage.css';
import { FaEye } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
const LoginPage=()=>{
    return(
        <Container className="wrapper">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div className='wrapper-header'>
                    <form action=" ">
                        <h1>Login</h1>
                        <div className="para">
                        <h2>Hey,</h2>
                       <h2> Login Now!</h2>
                        </div>
                     <Col sm={12} md={12} lg={12} className="input-box my-6">
                            <InputEL placeholder={"Email Address"} size="sm" endIcon={<IoPerson/>}></InputEL>
    </Col>
                        <Col sm={12} md={12} lg={12}   className="input-box my-6">
                            <InputEL placeholder={"Passward"} size="sm" endIcon={<FaEye/>}></InputEL>
    </Col>
                        <Col sm={12} md={12} lg={12}>
                        <div className="remember-forget">
                            <a href="#">Forget your Passward?</a>
                        </div>
                        <button type="submit">Sign In</button>
                        <div className="register-link">
                            <p>Don't have account?<a href="#">Sign Up</a></p>
                        </div>
                        </Col>
                    </form>
                    </div>
                </Col>
            </Row>

        </Container>

    );
}
export default LoginPage;