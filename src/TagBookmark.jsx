import React, { useState } from "react";
import './TagBookmark.css';
const TagBookmark=()=>{
    const [inputText, setInputText] = useState("");  // State to store input text
  const [tags, setTags] = useState([]);  // State to store tags

  // Handle input text change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Handle Add button click
{/*  const handleAddTag = () => {
    if (inputText.trim()) {
      setTags([...tags, inputText]);  // Add new tag to the list
      setInputText("");  // Clear the input field after adding
    }
  };*/}

  // Handle removing a tag
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

  return (
    
        <div className="wrapper-text">
        <div className="descript">
            <h6>Let's add some keywords</h6>
          <p>Keywords are used to match your manuscript with peer reviewers as well as assist readers in finding the published article.Please add at least five keywords (maximum of 10) and remember to keepthem short(a maximum of 3-4 words each) and as specific as possible.Don't add periods to initialisms or acronyms.<span style={{color:"blue"}}>Show me examples</span> </p>
            </div>  
            <p><strong>Note:</strong>Additional keywords may be added to your article by our editors</p>
    <div className="text2">
        <p>Enter keywords seperated by a comma.</p>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a tag"
      />
      <button onClick={handleAddTag}>Add</button>

      <div>
        <div className="bookmark-item">
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
      </div>
      <p>Please add 3 more keywords in order to proceed.</p>
    </div>
    </div>
    
  );
}

export default TagBookmark;