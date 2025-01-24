import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
const Conclusions=()=>{
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(<Container>
        <Row style={{textAlign:"left",color:"#0D98BA"}}>
            <Col>
            <h2>Conclusions</h2>
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
    </Container>);
}
export default Conclusions;