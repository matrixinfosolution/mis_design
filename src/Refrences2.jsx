import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Refrences2.css';
import Select from "react-dropdown-select";
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';
const Refrences2=()=>{
    const [selectedOption, setSelectedOption] = useState('');

    // Handle select option change
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleChange = (selected) => {
        setSelectedOption(selected);
      };
    
     
    
    const [formData, setFormData] = useState({
      Author: "",
      title: "",
      Source : "",
      Year:"",
      Volume:"",
      Access:"",
      URL:"",
      DOI:"",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Handle dropdown selection change
    const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
      setIsFormSubmitted(false); // Reset submission when changing option
    };
  
    // Handle input change in form fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsFormSubmitted(true); // Mark form as submitted
    };
  
    return(
        <Container>
           <Row className='wrapper-text'>
            <Col lg={12}>
                <h2 style={{color:"#0D98BA"}}>Okay, Durgaprasad. Let's take care of your references.</h2>
                <b>Original articles can include up to 200 references while remaining eligible for free publication.</b>
                <p>Original articles with 201 or more references will require Preferred Editing regardless of how many errors are found during our preliminary review.</p>
            </Col>
            <Col lg={12}>
                <b>Check your references before moving forward!</b>
                <p>Poor reference formatting is the #1 reason why articles are rejected or require the purchase of our Preferred Editing Service. <span style={{color:"#0D98BA"}}>(View reference examples.)</span></p>
            </Col>
            <Col lg={12}>
                <b>Most common reference errors:</b>
                <ul>
                    <li>Author names not listed in following format: “Smith D” or “Smith DH”</li>
                    <li>Article titles not listed in sentence case</li>
                    <li>Journal titles not correctly abbreviated</li>
                    <li>Issue included</li>
                    <li>Missing volume or page numbers</li>
                    <li>DOI missing or incorrectly entered (link must work)</li>
                </ul>
            </Col>
            <Col lg={6}>
             <div className='button-container'>
                <button className='styled-button bg-primary'>LAUNCH REFERENCE CONVERTER </button>
             </div>
            </Col>
            <Col lg={6}>
                <div className='button-content'>
                
      <div className='content'>
        
     <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="select-dropdown"
      >
        <option value="">Select Refrence Type to Article</option>
        <option value="form1">Article within a journal</option>
        <option value="form2">Video within a journal</option>
        <option value="form3">Website</option>
        <option value="form4">COMPLETE BOOK</option>
        <option value="form5">Book chapter or article within a book</option>
        <option value="form6">Whole issue of journal</option>
        <option value="form7">Book with institutional author</option>
    </select>
    </div>
    
                    </div>
                
                    </Col>
                    <Col lg={12}>
                    {selectedOption === "form1"  && <Form1 />}
      {selectedOption === 'form2' && <Form2 />}
      {selectedOption === 'form3' && <Form3 />}
      {selectedOption === 'form4' && <Form4 />}
      {selectedOption === 'form5' && <Form5 />}
      {selectedOption === 'form6' && <Form6 />}
      {selectedOption === 'form7' && <Form7 />}
                    </Col>
                    <Col ld={12} className='mt-4'>
                   <Row className='d-flex justify-content-between'>
                    <Col>
                    <button className='bg-secondary butts'>Back</button>
                    </Col>
                    <Col className='d-flex justify-content-end gap-2'>
                    <button className='bg-danger butts'>SAVE</button>
                    <button className='bg-primary butts'>SAVE AND CONTINUE</button>
                    </Col>
                   </Row>
                    </Col>
                    </Row>
                    </Container>
    );
}
export default Refrences2;