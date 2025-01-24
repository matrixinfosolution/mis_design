import React,{useState} from 'react';
import { Container,Row,Col,Form,Table } from 'react-bootstrap';
import './Relation.css';
const Relation=()=>{
    const [selectedOption, setSelectedOption] = useState('option1');
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected Option: ${selectedOption}`);
      };
return(
    <Container fluid className='form-content'>
        <Row >
            <Col lg={8} >
                <h3 style={{color:"#0D98BA"}}>Ethics Statements and Conflict of Interest Disclosures</h3>
                <p>Relevant Financial Activities Outside the Submitted Work</p>
                <p>Relevant Financial Activities Outside the Submitted Work
Please indicate all financial relationships (regardless of compensation amount) associated with the submitting author and all co-authors. You should disclose interactions with any entity that could be considered broadly relevant to your work. Report all relationships that were present during the 36 months prior to publication. Remember – if there is any question, it is better to disclose a relationship than not to do so.
</p>
<p>
For grants you have received for work outside the submitted work, only disclose support from entities that could be perceived to be affected financially by the published work, such as drug companies, or foundations supported by entities that could be perceived to have a financial stake in the outcome.
</p>
<p>Do you or your co-authors have any relevant financial activities to disclose?</p>
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
                
        <p style={{color:"#0D98BA",marginTop:"20px"}}>Help me contact my co-authors to obtain any potential conflicts of interest.
</p>
            </Col>
            <Col lg={11}>
              <p className='text'>Tip:Use the Add Disclosure button for each activity to disclose</p>
              <Table striped bordered hover responsive="xl" className="w-100">
                <thead style={{backgroundColor:"black",color:"white"}}>
                    
                        <th style={{width:"20%"}}>Institution/Company</th>
                        <th style={{width:"20%"}}>Authors</th>
                        <th style={{width:"20%"}}>COI Type</th>
                        <th style={{width:"40%"}}>Comments</th>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>B</td>
                        <td>A grant</td>
                        <td>C</td>
                    </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={12}>
            <button>Add Disclosure</button>
            </Col>
        </Row>
    </Container>
)
}
export default Relation;