import React,{useState} from 'react';
import { Row,Col,Form } from 'react-bootstrap';
import './Book.css';
const Tag=()=>{ 
    const [inputText, setInputText] = useState("");
    const [tags, setTags] = useState([]); 
    const handleRemoveTag = (index) => {
        const updatedTags = tags.filter((tag, idx) => idx !== index);
        setTags(updatedTags);
      };
      const handleAddTag = () => {
        const newTags = inputText.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
        
        if (newTags.length) {
          setTags([...tags, ...newTags]);  // Add multiple tags at once
          setInputText("");  // Clear the input field
        }
      };
    return(
        <Row className='mt-3 text-wrapper'>
        <Form.Group>
        <div className='bookmark-item'>
            <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tag-box">
              {tag}
              <span className="remove" onClick={() => handleRemoveTag(index)}>
                ✖
              </span>
            </div>
          ))}
          </div>
          </div>
            
        </Form.Group>
        </Row>
    )
}
export default Tag;