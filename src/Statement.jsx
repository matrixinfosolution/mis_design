import React,{useState} from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import './Statement.css';
const Statement=()=>{
    const [isChecked1, setIsChecked1] = useState(false);
    const handleCheckboxChange1 = (e, setIsChecked) => {
        setIsChecked(e.target.checked);
      };
    return(
        <Container>
            <Row className='wrapper1'>
          <Col lg={12} >
          <h3 style={{color:'#0D98BA'}}>Ethics Statements and Conflict of Interest Disclosures</h3>
          <p>Cureus adheres to <span style={{color:'#0D98BA'}}>ICMJE's Form for Disclosure of Potential Conflict of Interest.</span> Please provide all relevant information. A statement based on your response will be generated and included in the published article. You may choose to <span  style={{color:'#0D98BA'}}>download a copy of the form </span> to share with your co-authors, but as the submitting and corresponding author, you alone will be responsible for including all co-author COI and disclosure statements.
</p>
          </Col>
          <Col >
          <Form.Check
              type="checkbox"
              id="checkbox1"
              label=" I understand that I alone am responsible for including all co-author COI and disclosure statements.
              "
              checked={isChecked1}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked1)}
            />
          </Col>
            </Row>

        </Container>
    )
}
export default Statement;