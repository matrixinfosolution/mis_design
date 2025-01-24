import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Payment.css';
const Payment=()=>{
    const [selectedOption, setSelectedOption] = useState('option1');
    const [text, setText] = useState('');

    // Step 2: Handle text change
    const handleChange = (event) => {
      setText(event.target.value);
    };
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Option: ${selectedOption}`);
      };
return(
    <Container className='form-contain'>
    <Row>
        <Col lg={9}>
        <h3 style={{color:"#0D98BA"}}>Ethics Statements and Conflict of Interest Disclosures.</h3>
        <p>The Works Under Consideration for Publication</p>
        <p>Did you or your institution at any time receive payment or services from a third party (government, commercial, private foundation, etc.) for any aspect of the submitted work (such as grants, data monitoring board, study design, manuscript preparation, statistical analysis, etc.)? If so, please provide details.</p>
        <Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label=" No payments or services were received from a third party."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label=" Yes, payments or services were received from a third party."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        </Form>
        <p className='text4'>Help me contact my co-authors to obtain any potential conflicts of interest.</p>
        </Col>
        <Col lg={11}>
        <h6 style={{fontSize:"12px",marginBottom:"2px"}}>Please provide details below.</h6>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '200px', fontSize: '16px' }}
        
      />
        </Col>
    </Row>
    </Container>
)
}
export default Payment;