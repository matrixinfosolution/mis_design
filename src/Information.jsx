import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Information.css';
import InputEL from './InputEL';
import './InputEL.css';
const Information=()=>{
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [text, setText] = useState('');

    // Handle textarea change
    const handleChange = (event) => {
      setText(event.target.value);
    };
    const handleCheckboxChange1 = (e, setIsChecked) => {
        setIsChecked(e.target.checked);
      };
      return(
        <Container>
            <Row className='wrappers'>
                <Col lg={9} className='wrappers-text'>
                    <b>Required:</b>
                <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Please confirm that informed consent(verbal/written) has been obtained or waiverd,particularly with retrospective case study and small case series."
              checked={isChecked1}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked1)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox2"
              label="Please confirm that no identifying information (in the text or image) appears in your article,or if so,confirm that patient consent was obtained prior to submitting for publiation."
              checked={isChecked2}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked2)}
            />
                </Col>
                <Col lg={12}>
                    <b>Attention:IRB and Ethics Commitee Information</b>
                    <p>All prospective studies and research involving human subjects are required to provide IRB/ethics commitee approval details.When the institution that sopnsors a retrospective study mandatesIRB review,an IRB approval number must be provided.</p>
                </Col>
                <Col lg={6}>
                <label className='mt-3'style={{fontWeight:"bold"}}>Institutional Review Board IRB or ethics commitee(provided full name)</label>
        <InputEL></InputEL>
                </Col>
                <Col lg={6}>
                    <label className='mt-3'style={{fontWeight:"bold"}}>Approval number (if applicable)</label>
                    <InputEL></InputEL>
                </Col>
                <Col lg={12} className='mt-3'>
            <form>
        <div className="textarea-container">
          <label htmlFor="message" style={{fontWeight:"bold"}}>Statement including approval of research</label>
          <textarea
            id="message"
            rows="8"        // Height of the textarea
            cols="50"        // Width of the textarea (for visual reference, but it's full-width with CSS)
            value={text}
            onChange={handleChange}
            
          />
        </div>

        </form>
            </Col>
            </Row>
        </Container>
      );

}
export default Information;