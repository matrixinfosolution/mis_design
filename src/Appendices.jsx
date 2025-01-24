import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";
import './Appendices.css';
const Appendices=()=>{
    const [selectedOption, setSelectedOption] = useState('option1');
    const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Option: ${selectedOption}`);
      };
return(
    <Container>
    <header>
        <p>Article <FaAngleRight /> Appendices</p>
    </header>
    <Row className='wrapper'>
        <Col lg={12}>
        <h2 style={{color:"#0D98BA"}}>Will you be including appendices?</h2>
        <p>Only supplemental materials such as interview questions,participant surveys,questionaries, etc should be added as appendices. </p>
        <b>All figures,tables or videos mentioned in your article must be inserted in the corresponding article section.Failure to do so will hurt your chances of reciving free publocation.</b>
        <p>Do you want to include any supplemental information relevant to your work?</p>
        <Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label=" No, I am not including appendices."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
         <Form.Check
          type="radio"
          label=" Yes, I am  including appendices."          
          name="options"
          id="option2"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleRadioChange}
        />
        </Form>
        </Col>
        <Col lg={12}>
        <textarea
        value={value}
        onChange={handleChange}
        rows={4}   // Specifies the number of visible text lines
        cols={100}
        style={{ width: '100%', height: '200px', fontSize: '16px' }}  // Specifies the visible width in characters
      />
        </Col>
    </Row>

    </Container>
)
}
export default Appendices;