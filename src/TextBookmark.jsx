
import React, { useState } from "react";
import './Bookmark.css';
const TextBookmark=()=>{
    const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkText, setBookmarkText] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setBookmarkText(event.target.value);
  };

  // Handle the Add Bookmark button
  const handleAddBookmark = () => {
    if (bookmarkText.trim()) {
      setBookmarks([...bookmarks, bookmarkText]);
      setBookmarkText(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Bookmark Manager</h1>
      <input
        type="text"
        value={bookmarkText}
        onChange={handleInputChange}
        placeholder="Enter bookmark text"
      />
      <button onClick={handleAddBookmark}>Add</button>

      <div>
        <h2>Bookmarks:</h2>
        <ul  className="bookmark-item">
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
               <i className="fas fa-bookmark bookmark-icon"></i> {bookmark}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TextBookmark;