import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import BcAccordian from './BcAccordian';
import BtnAccordian from './BtnAccordian';
const AccordBtn=()=>{
    return(
        <Row>
            <Col lg={3}>
            <BtnAccordian></BtnAccordian>
            </Col>
            <Col lg={12}>
            <BtnAccordian></BtnAccordian>
            </Col>
        </Row>
    )

}
export default AccordBtn;