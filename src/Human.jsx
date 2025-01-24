import React,{useState} from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import './Human.css';
const Human=()=>{
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
    <Container>
        
        <Row className='wrapper2'>
            <Col lg={12}>
            <h3 style={{color:"#0D98BA"}}>Ethics Statements and Conflict of Interest Disclosures
</h3>
             <p>Human Subjects</p>
             <p>Did you study human participants or live human tissue? Important: You must select 'Yes' for all patient-related submissions, including retrospective studies, case study and studies where IRB approval was waived.
</p>
            </Col>
            <Col lg={12}>
            <Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label="No, this study does not involve human participants or live human tissue."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="Yes, this study involves human participants or live human tissue."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        </Form>
            </Col>
            <Col className='text'>
            <p style={{color:"#0D98BA"}}>Help me contact my co-authors to obtain any potential conflicts of interest.</p>
            </Col>

        </Row>
        
    </Container>
)
}
export default Human;