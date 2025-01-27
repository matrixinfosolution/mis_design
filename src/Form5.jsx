import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import InputEL from './InputEL';
import './InputEL.css';
const Form5=()=>{
    const [text, setText] = useState('');

    // Handle textarea change
    const handleChange = (event) => {
      setText(event.target.value);
    };
return(
    <Container>
        <Row className='wrapp'>
            <Col lg={12}>
            <label>Authors</label>
        <InputEL></InputEL>  
            </Col>
            <Col lg={12}>
            <label className='mt-3'>Title</label>
        <InputEL></InputEL>  
            </Col>
            <Col lg={12} className='mt-3'>
            <form>
        <div className="textarea-container">
          <label htmlFor="message">Source name</label>
          <textarea
            id="message"
            rows="8"        // Height of the textarea
            cols="50"        // Width of the textarea (for visual reference, but it's full-width with CSS)
            value={text}
            onChange={handleChange}
            
          />
        </div>

        </form>
            </Col>
            <Col lg={4}>
            <label className='mt-3'>Editor</label>
        <InputEL></InputEL> 
            
            </Col>
            <Col lg={4}>
            <label className='mt-3'>Publisher</label>
        <InputEL></InputEL> 
            
            </Col>
            <Col lg={4}>
            <label className='mt-3'>Publish location</label>
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
            <label className='mt-3'>Pages</label>
        <InputEL></InputEL> 
            
            </Col>
            <Col lg={12}>
            <label className='mt-3'>DOI (Do not include "DOI:" or "http://")</label>
        <InputEL></InputEL>
            </Col>
            <Col lg={12}>
            <label className='mt-3'>URL (in absence of DOI)</label>
        <InputEL></InputEL>
            </Col>
            <Col lg={12} className='d-flex justify-content-end gap-2 mt-3'>
            <button className='bg-secondary buttons2'>Cancel</button>
            <button className='bg-primary buttons1'>Save</button>
        </Col>
            </Row>
            </Container>
)
}
export default Form5;