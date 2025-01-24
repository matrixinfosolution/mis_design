import React,{useState} from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import './Acknow.css';
const Acknow=()=>{
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
        <Row className='wrapper'>
            <Col lg={12}>
            <h3 style={{color:'#0D98BA'}}>Do you have any acknowledgements to add?</h3>
            <p>Any acknowledgements you enter will be displayed in your article’s Author and Article Info tab.</p>
            </Col>
            <Col lg={12}>
                <ul>
                    <li  className='text'>You are encouraged to indicate if your data, analytic methods, and study materials are available upon request. If making your data and/or materials available, please specify where that material will be available. (Example: Data are available on reasonable request. The data are stored as de-identified participant data which are available on request to ABC (abc@example.edu).)
</li>
                 <li className='text'>If you wish to designate multiple first authors please do so here. (Example: Frank Smith and June Wright contributed equally to the work and should be considered co-first authors.)
</li>
                </ul>
                </Col>
            <Col lg={12}>
                <Form onSubmit={handleSubmit}>
                <Form.Check
          type="radio"
          label="No, I do not have any acknowledgements to add."          
          name="options"
          id="option1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        </Form>
            </Col>
            <Col lg={12} className='text'>
            <Form.Check
          type="radio"
          label="Yes, I'd like to add acknowledgements."
              
          name="options"
          id="option2"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleRadioChange}
        />
            </Col>
            <Col lg={12} className='text2'>
            <p style={{fontSize:"13px",marginBottom:"0px"}}>Please provide details below</p>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '300px', fontSize: '16px' }}
        
      />
            </Col>
        </Row>
    </Container>
)
}
export default Acknow;