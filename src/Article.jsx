import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Article.css';
const Article=()=>{
    const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
    return(
        <Row className='wrapper1'>
          <Col lg={12}>
            <h3>What's the title of your article?</h3>
            </Col>
            <Col lg={12} className='area'>
            <p>Title should be entered in <span className='text'>APA Style Title Case.</span>Failure to do so will hurt your chances of receiving free publication.Title should be limited to one sentence only.Do not include a period at the end of the title.<span className='text'>Show me an example.</span></p>
        <textarea  value={text}
        onChange={handleChange}
        rows="10"  // Set the number of visible rows
        cols="50"  // Set the number of visible columns
        style={{
            width: '100%',              // Full width of the container
            height: '200px',}}></textarea>
            <p className='text4'>250 characters</p>
        </Col>
        </Row>
    )
}
export default Article;