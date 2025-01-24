import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Introduction.css';
const Introduction=()=>{
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(
        <Container>
            <Row className='wrapp'>
                <Col lg={12}>
                <h2 style={{color:"#0D98BA"}}>Introduction</h2>
                <p>We recommend writing and preparing your article prior to adding it here. Our publishing tool can be used to write and edit directly within the browser, but it lacks the flexibility of more robust word processors. If you need to make any significant changes or edits during the publication process, we suggest you first do so in your original document and then re-paste them here. Important: Do not add section names (e.g. Introduction, Discussion, Conclusions, etc.), as these will be added automatically.</p>
                </Col>
                <Col lg={12}>
                    <b>Common questions:</b>
                </Col>
                <Col lg={12} style={{color:"#0D98BA"}}>
                    <ul>
                        <li>How do I format my citations?</li>
                        <li>What about subheaders?</li>
                    </ul>
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
export default Introduction;