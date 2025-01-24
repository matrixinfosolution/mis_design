import React,{useState} from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import { IoIosClose } from "react-icons/io";
import './Financial.css';
const Financial=()=>{
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [text, setText] = useState('');

    // Step 2: Handle text change
    const handleChange = (event) => {
      setText(event.target.value);
    };
    const handleCheckboxChange1 = (e, setIsChecked) => {
        setIsChecked(e.target.checked);
      };
    return(
    <Container  fluid className='form-container'>
    
        <IoIosClose className='btn-close2'/>
        <Row>
        <Col lg={12}>
        <h6>Financial</h6>
        <p>Check the appropriate boxes below to indicate where you(or your co-authors) have financial relationships (regardless of compensation amount) and add details in relevant fields.You may check multiple boxxes per relationship.You should disclose interactions with any entity that could be considered broadly relevant to your work.Report all relationships that were present during the 36 months prior to publication</p>
        </Col>
        <Col lg={9}>
            <Row className='content'>
                <Col lg={5}>
                <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Grant"
              checked={isChecked1}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked1)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox2"
              label="Employment"
              checked={isChecked2}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked2)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Stock/Stock Options"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Personal Fees(consulting,lectures,manuscript prepretions,etc)"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Patent"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Royalties"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
                </Col>
                <Col lg={4}>
                <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Non-financial(e.g.leadership or fiduciary role in other board,society,commitee or advocacy group)"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="Other (e.g. payment for expert textimony,support for attending meetings/travel,receipt of equipment/materials/drugs/medical writing/gifts/other services)"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
                </Col>
            
            </Row>
        </Col>
        <Col lg={12}>
        <h6 style={{marginTop:"20px",fontSize:"13px",marginBottom:"2px"}}>Name of Institution/Company</h6>
                <input style={{width:"100%"}}></input>
        </Col>
        <Col lg={12} className='mt-3'>
        <h6 style={{fontSize:"13px",marginBottom:"2px"}}>Author(s)</h6>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '50px', fontSize: '16px' }}
        
      />
        </Col>
        <Col lg={12} className='mt-3'>
        <h6 style={{fontSize:"13px",marginBottom:"2px"}}>Comments</h6>
            <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', height: '50px', fontSize: '16px' }}
        
      />
        </Col>
        <Col lg={12} className='d-flex justify-content-end mt-3 gap-3'>
            <button className='button1'>Cancel</button>
            <button className='button2'>Add Author</button>
            </Col>
        </Row>
    </Container>
    );

}
export default Financial;