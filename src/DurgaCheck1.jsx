import React,{useState} from 'react';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import './Select.css';
const DurgaCheck1=()=>{
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
  
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
          Substantial Contribution to concepts or design(+2)
          {/* Arrow icon */}
          <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
        </button>
      
        {/* Dropdown menu */}
        {isDropdownOpen &&  (
                <div className="dropdown-menu">
                    <Row>
                        <Col lg={12}>
                        <b>All authors must contribute to atleast one of the following:</b>
                        <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Substantial contributon to concept or design"
              checked={isChecked1}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked1)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox2"
              label=" Acquisition, analysis or interpretation of data"
              checked={isChecked2}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked2)}
            />
                        </Col>
                  <Col lg={12}>
                  <b>All authors must contribute to atleast one of the following:</b>
                        <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Drafting of the manuscript"
              checked={isChecked3}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked3)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox1"
              label=" Critical review of manuscript for important intellectual content"
              checked={isChecked4}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked4)}
            />
                    </Col> 
                    <Col lg={12}>
                  <b>Required:</b>
                        <Form.Check
              type="checkbox"
              id="checkbox1"
              label="Agreed to be accountable for all aspects of work"
              checked={isChecked5}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked5)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox1"
              label=" Will review the final version to be published"
              checked={isChecked6}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked6)}
            />
                    </Col>
                    <Col lg={12}>
                        <b>If relevant (not required):</b>
                        <Form.Check
              type="checkbox"
              id="checkbox1"
              label=" Supervised the work"
              checked={isChecked7}
              onChange={(e) => handleCheckboxChange1(e, setIsChecked7)}
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
export default DurgaCheck1;