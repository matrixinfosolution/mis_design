import React, { useState } from 'react';
import './CustomDrop.css';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [searchQuery, setSearchQuery] = useState('');

  const options = [
    'Name 1',
    'Name 2',
    'Name 3',
    'Name 4',
    'Special Option',
    'Another Option',
  ];

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchQuery(''); // Clear search query when dropdown is closed
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  return (
    <div className="dropdown-container">
      {/* Dropdown Button */}
      <div className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption}
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="dropdown-options">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* Filtered options */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="dropdown-option">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};
export default Dropdown;