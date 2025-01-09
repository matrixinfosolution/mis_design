import React, { useState } from 'react';
import './TabWithArrow.css';  // Ensure to import the CSS file for styling

const TabWithArrow = () => {
  const [activeTab, setActiveTab] = useState(0);  // Track the active tab (0, 1, or 2)

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3','Tab 4','Tab 5','Tab 6'];  // Define the tab names

  return (
    <div className="tabs-container">
      {/* Tab buttons */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}  // Set active tab on click
          >
            {tab}
            {activeTab === index && <span className="arrows"></span>}
          </div>
        ))}
       {/* <div className="arrows" style={{ left: `${activeTab *10}%` }}></div>*/}
      
      </div>

      {/* Arrow under active tab */}
      

      {/* Content of the active tab */}
      <div className="tab-content">
        <h2>{tabs[activeTab]} Content</h2>
        <p>This is the content of {tabs[activeTab]}</p>
      </div>
    </div>
  );
};

export default TabWithArrow;