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
    <div>
      <h1>Tag Manager</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a tag"
      />
      <button onClick={handleAddTag}>Add</button>

      <div>
        <h2>Tags:</h2>
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
    </div>
  );
}

export default TagBookmark;