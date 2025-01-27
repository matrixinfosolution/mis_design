import React from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import InputEL from './InputEL';
import './InputEL.css';
const Form2 = () => {
  return (
<Container>
    <Row className='wrapp'>
        <Col lg={12}>
            <label>Author</label>
        <InputEL></InputEL>
        <label className='mt-3'>Title</label>
        <InputEL></InputEL>
        <label className='mt-3'>Source Name</label>
        <InputEL></InputEL>
        </Col>
        <Col lg={4}>
       <label className='mt-3'>Year</label>
       <InputEL></InputEL>
        </Col>
        <Col lg={4}>
       <label className='mt-3'>Volume</label>
       <InputEL></InputEL>
        </Col>
        <Col lg={4}>
       <label className='mt-3'>Page</label>
       <InputEL></InputEL>
        </Col>
        <Col lg={4}>
       <label className='mt-3'>Access Date</label>
       <InputEL></InputEL>
        </Col>
        <Col lg={12}>
       <label className='mt-3'>URL</label> 
       <InputEL></InputEL>
       <label className='mt-3'>DOI (Do not include "DOI:" or "http://")</label> 
       <InputEL></InputEL>
        </Col>
        <Col lg={12} className='d-flex justify-content-end gap-2 mt-3'>
            <button className='bg-secondary buttons2'>Cancel</button>
            <button className='bg-primary buttons1'>Save</button>
        </Col>
    </Row>
</Container>
  );
};

export default Form2;