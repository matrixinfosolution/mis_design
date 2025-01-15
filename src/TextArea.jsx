import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './TextArea.css';
import { Scrollbars } from 'react-custom-scrollbars';
const TextArea=()=>{
    const [text, setText] = useState('');

    const handleChange = (e) => {
      setText(e.target.value);
    };
    return(
        <Container>
         <Row className="text-container">
            <Col lg={12}>
            <h1>It's time to add the abstract</h1>
            </Col>
            <Col lg={12}>
                <p>Copy and paste your abstract below.Only original artiles may include <span style={{color:"#088F8F"}}>subheaders.</span>The abstract is limited to 3,500 characters</p>
                <div style={{ width: '100%', height: '400px' }}>
               <Scrollbars>
               <textarea value={text}
        onChange={handleChange}
        rows="30"  // Set the number of visible rows
        cols="50" className='text-area'></textarea>
        </Scrollbars>
        </div>
        <p className='text2'>0/3500 characters</p>
            </Col>
         </Row>
        </Container>
    )
}
export default TextArea;