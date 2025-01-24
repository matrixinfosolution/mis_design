import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import './Discussion.css';
const Materials=()=>{
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(
<Container>
    <Row  className='wrapper-text'>
        <Col lg={12}>
        <h2 style={{color:"#0D98BA"}}>Materials and Methods</h2>
        <b>Common questions</b>
        </Col>
        <Col lg={12} className='text'>
            <Row>
                <Col lg={4}>
                    <ul>
                        <li>How do I format my citations?</li>
                        <li>What about subheaders?</li>
                    </ul>
                </Col>
                 <Col lg={8}>
                    <ul>
                        <li>Where do I add figures,tables,videos or interactive models?</li>
                        <li>How do I correctly mention figures,tables,videos or interactive models in the text?</li>
                    </ul>
                
                </Col>
            </Row>
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
    );
}
export default Materials;