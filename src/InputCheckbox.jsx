import React,{useState} from 'react';
import './Checkbox.css';
const InputCheckbox=()=>{
    const [isChecked, setIsChecked] = useState(false);

  // Handler for checkbox change event
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update state based on checkbox state
  };
    return(
        <div className='wrapper'>
            <h2>You can select up to three categories.</h2>
            <label>
        <input
          type="checkbox"
          checked={isChecked} // Bind checkbox state to isChecked
          onChange={handleCheckboxChange} // Handle state change on checkbox toggle
        />
        Advenced Manufacturing Technologies
      </label>
        </div>
    )
}
export default InputCheckbox;