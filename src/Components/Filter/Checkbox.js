import './Check.css';
import React from 'react';
const Checkbox = ({ label, value, isSelected, onCheckboxChange }) => {
    return (
        
    <div className="checkbox-container">              
      <label>
        <input
          type="checkbox"
          value={value}
          checkedbox={isSelected}
          onChange={onCheckboxChange}></input>
        {label}
      </label>
    
      </div>




    );
  };
  export default Checkbox;