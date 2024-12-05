import React, { useEffect, useState } from 'react';
import styles from './CustomSelect.module.css';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const CustomSelect = ({ options,selectText="Select an option",setSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionID, setSelectedOptionID] = useState(0);

  const filteredOptions =  
  options.filter(option =>
    option?.label?
    option?.label.toLowerCase().includes(searchTerm.toLowerCase())
    :option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelectedOption(option?.label || option);
    setSelectedValue({...option,isselect:true});
    setIsOpen(false);
   };

  
   
   

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectText}</span>
        <FiChevronDown className={styles.icon} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className={styles.searchInput}
            />
          </div>
          <ul className={styles.optionsList}>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={(e) => {handleSelect(option)}}
                className={styles.option}
              >
                {option?.label || option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
