import React,{useState} from 'react';
import './FormCustom.css';
import { Container,Row,Col,Form } from 'react-bootstrap';
import { IoIosClose } from "react-icons/io";
const DurgaForm=()=>{
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
  };
    return(
         <Container fluid className='wrapper-header1'>
        <Row >
            
         <IoIosClose className='btn-close'/>
         <Col lg={12} className='text-wrapp'>
         <p>Add an Author</p>
            <p>This email is our system,but you co-author hadn't confirmed their account.Please edit all fields for accuracy and formatting consistency.</p>
            <p>Email:<span style={{color:"#0D98BA"}}>abcd@gmail.com</span></p>
         </Col>
         <Col lg={12} className='input-group'>
            
            <Row>
                
                <Col lg={5} md={5} sm={2}>
            
                <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"/>
            
                </Col>
                <Col lg={2} md={2} sm={2}>
                <Form.Label>MI</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Middle Name"
          />
                </Col>
                <Col lg={5} md={5} sm={2}>
                <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
          />
                </Col>
                
            
                </Row>
         </Col>
         <Col lg={12} className='mt-3'>
         <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSelect">
        <Form.Label className='text-align-left'>Speciality: </Form.Label>
        <Form.Select
          value={selectedOption}
          onChange={handleSelectChange}
          aria-label="Select an option"
        >
          <option value="">Algorithm and Data Structure</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Form.Select>
      </Form.Group>
      </Form>
         </Col>
         <Col lg={12} className='mt-3'>
            <p style={{fontSize:'20px'}}>Affilation and Location</p>
            <Form.Label>Academic Institution</Form.Label>
            <Form.Control
              type="text"/>
         </Col>
         <Col lg={12} className='mt-3'>
         <Form.Label>Department Specialization</Form.Label>
            <Form.Control
              type="text"/>
         </Col>
         <Col lg={12} className='mt-3'>
            <Row>
                <Col lg={6} >
                <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSelect1">
        <Form.Label>Country: </Form.Label>
        <Form.Select
          value={selectedOption}
          onChange={handleSelectChange}
          aria-label="Select an option"
        >
          <option value="">India</option>
          <option value="option1">US</option>
          <option value="option2">Germany</option>
          <option value="option3">Option 3</option>
        </Form.Select>
      </Form.Group>
      </Form>
                </Col>
                <Col lg={6}>
                <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"/>
         
                </Col>
            </Row>
         </Col>
         <Col lg={12} className='d-flex justify-content-end mt-3 gap-3'>
            <button className='button1'>Cancel</button>
            <button className='button2'>Add Author</button>
            </Col>
         </Row>

        
         </Container>
    )
}
export default DurgaForm;