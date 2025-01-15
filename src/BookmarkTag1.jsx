import React,{useState} from 'react';
import './Book.css';
import Tag from './Tag';
import {Container, Button, Row, Col, Form } from 'react-bootstrap';
const BookmarkTag1=()=>{
    const [inputText, setInputText] = useState("");  // State to store input text
    const [tags, setTags] = useState([]);  // State to store tags
  
    // Handle input text change
    const handleInputChange1 = (event) => {
      setInputText(event.target.value);
    };
    const handleRemoveTag = (index) => {
        const updatedTags = tags.filter((tag, idx) => idx !== index);
        setTags(updatedTags);
      };
    
      const handleAddTag1 = () => {
        const newTags = inputText.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
        
        if (newTags.length) {
          setTags([...tags, ...newTags]);  // Add multiple tags at once
          setInputText("");  // Clear the input field
        }
      };

      return(
        <Container className='m-5'>
            <Row className='text-wrapper'>
               <Col lg={12}>
               <h2 className='text1'>Let's add some keywords</h2>
               <p>Keywords are to match your manuscript with peer reviewers as well as assist readers in finding the published article.Please add atleast five keywords(maximum of 10) and remember to keep them short(a maximum of 3-4 words each)and as specific as possible.Don't add periods to initialisms or acronyms.<span style={{color:'#088F8F'}}>Show me examples</span></p>
               
              <p><strong>Note:</strong>Additional keywords may be added to your article by our editors.</p>
               </Col> 
            
          </Row>
          <Row className='text-wrapper'>
            <Col lg={12} className='mt-2'>
                <Form.Group>
                    <Form.Label>Enter keywords seperated by a comma</Form.Label>
                    </Form.Group>
                    
                </Col>
                <Col lg={12}>
            
            <input
            type="text"
          value={inputText}
            onChange={handleInputChange1} className='text3'/>
            
            <button onClick={handleAddTag1}>Add</button>
            <Tag></Tag>
        </Col>
        
       
       
    

       </Row>
        </Container>
      )

}
export default BookmarkTag1;