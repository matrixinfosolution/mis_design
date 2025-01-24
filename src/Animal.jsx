import React,{useState} from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import './Animal.css';
const Animal=()=>{
    const [selectedOption, setSelectedOption] = useState('option1');
    const [text, setText] = useState('');

    // Step 2: Handle text change
    const handleChange = (event) => {
      setText(event.target.value);
    };
  // Step 2: Handle change when radio button is clicked
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Option: ${selectedOption}`);
  };
    return(
        <Container fluid>
            <Row className='wrapper-text'>
                <Col lg={12}>
                <h3 style={{color:'#0D98BA'}}>Ethics Statements and Conflict of Interest Disclosures
</h3>
                <p>Animal Subjects</p>
                <p>Did you study animal subjects or tissue?</p>
                </Col>
                <Col lg={12}>
                <Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label="No, this study does not involve animal subjects or tissue."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        
        <Form.Check
          type="radio"
          label="Yes, this study involves animal subjects or tissue."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        </Form>
                </Col>
                <Col lg={12}>
                <p style={{color:'#0D98BA',marginTop:"20px"}}>Help me contact my co-authors to obtain any potential conflicts of interest.</p>
                </Col>
                <Col>
                <p style={{fontSize:"13px",marginBottom:"2px"}}>Name of Local Animal Ethics Commitee or NIH guidlines statement</p>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '200px', fontSize: '16px' }}
        
      />
                </Col>
                <Col lg={12}>
                <p style={{marginTop:"20px",fontSize:"13px",marginBottom:"2px"}}>Protocol Numbar</p>
                <input style={{width:"100%"}}></input>
                </Col>

            </Row>
        </Container>
    )
}
export default Animal;