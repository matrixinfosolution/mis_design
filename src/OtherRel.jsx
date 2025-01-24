import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './OtherRel.css';
const OtherRel=()=>{
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
    <Row className='pay-content'>
        <Col lg={9}>
            <h3 style={{color:"#0D98BA"}}>Ethics Statements and Conflict of Interest Disclosures
</h3>
<p style={{fontSize:"19px"}}>Relationships Not Covered Previously</p>
<p>Are there other relationships or activities that readers could perceive to have influenced, or that give the appearance of potentially influencing, what you wrote in the submitted work? If so, please provide details in the box provided below.
</p>

<Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label=" No other relationships/conditions/circumstances that present a potential conflict of interest"          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="  Yes, the following relationships/conditions/circumstances are present."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        </Form>
        <p className='text4'>Help me contact my co-authors to obtain any potential conflicts of interest.</p>
        </Col>
        <Col lg={10}>
            <h6>At the time of publication approval, we may ask authors to confirm and, if necessary, update their disclosure statements. On occasion, we may ask authors to disclose further information about reported relationships.


</h6>
        </Col>
        <Col lg={12}>
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
export default OtherRel;