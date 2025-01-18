import React,{useState} from 'react';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import './Select.css';
const DurgaCheck2=()=>{
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange1 = (e, setIsChecked) => {
        setIsChecked(e.target.checked);
      };
      const [selectedOptions, setSelectedOptions] = useState([]);
  
      // State to manage dropdown visibility
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
      // Handle checkbox selection
      const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) => {
          if (prev.includes(option)) {
            // Deselect the option if it was previously selected
            return prev.filter((item) => item !== option);
          } else {
            // Select the option if it wasn't selected before
            return [...prev, option];
          }
        });
      };
    
      // Toggle dropdown visibility
      const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
      };

      return(
        <div className="dropdown-container">
        <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={toggleDropdown}
        >
          Supervised the work
          {/* Arrow icon */}
          <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
        </button>
      
        {/* Dropdown menu */}
        {isDropdownOpen &&  (
                <div className="dropdown-menu">
                    <Row>
                        <Col lg={12}>
                        <b>If Relavent:</b>
                        <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Supervised the work"
              checked={isChecked1}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked1)}
            />
            
</Col>
<Col >
            <button className='butts'>Apply</button>
            </Col>   
</Row>
                    </div>
    )}
  </div>
  </div>
      );
}
export default DurgaCheck2;