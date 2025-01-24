import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Property.css';
const Property=()=>{
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
<Container>
    <Row className='form-text'>
        <Col lg={9}>
            <h3 style={{color:"#0D98BA"}}>Ethics Statements and Conflict of Interest Disclosures</h3>
            <p style={{fontSize:"20px"}}>Intellectual Property: Patents & Copyrights</p>
            <p style={{fontSize:"15px"}}>Do you have any patents, whether planned, pending or issued, that could be considered broadly relevant to this work? If so, please provide details in the box provided below.
</p>
<Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label=" No relevant patents or copyrights."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="Yes, there are patents/copyrights that could be considered relevant"          
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
            <h6 className='text2'>Please provide details below.</h6>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '200px', fontSize: '16px' }}
        
      />
        </Col>
    </Row>
</Container>
    );
}
export default Property;