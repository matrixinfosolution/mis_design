import React,{useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Footer.css'; // Import the CSS file for styling
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";


const Footer1 = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    
    const footerContents = [
       1,2,3,4,5,6,7,8,9
      ];  // Function to go to the previous content
     
  const navigate = useNavigate(); // Initialize useNavigate hook

  const location = useLocation(); // Get current route path

  const handleBackClick = () => {
   
    if (location.pathname === "/page2") {
      navigate("/"); // Go to Page1 from Page2
    } else if (location.pathname === "/page3") {
      navigate("/page2"); // Go to Page2 from Page3
    } else if (location.pathname === "/page4") {
      navigate("/page3"); // Go to Page3 from Page4
    } else if (location.pathname === "/page5") {
      navigate("/page4"); // Go to Page4 from Page5
    } else if (location.pathname === "/page6") {
      navigate("/page5"); // Go to Page5 from Page6
    } else if (location.pathname === "/page7") {
      navigate("/page6"); // Go to Page6 from Page7
    } else if (location.pathname === "/page8") {
      navigate("/page7"); // Go to Page7 from Page8
    }
    if (currentIndex > 1) {
        setCurrentIndex(currentIndex - 1);
      }
  };

  const handleForwardClick = () => {
    if (location.pathname === "/") {
      navigate("/page2"); // Go to Page2 from Page1
    } else if (location.pathname === "/page2") {
      navigate("/page3"); // Go to Page3 from Page2
    } else if (location.pathname === "/page3") {
      navigate("/page4"); // Go to Page4 from Page3
    } else if (location.pathname === "/page4") {
      navigate("/page5"); // Go to Page5 from Page4
    } else if (location.pathname === "/page5") {
      navigate("/page6"); // Go to Page6 from Page5
    } else if (location.pathname === "/page6") {
      navigate("/page7"); // Go to Page7 from Page6
    } else if (location.pathname === "/page7") {
      navigate("/page8"); // Go to Page8 from Page7
    }
    if (currentIndex < footerContents.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
  };


  return (
    <footer className="footer">
      <button className="arrow-button left" onClick={handleBackClick}>
      <IoMdArrowDropleft className='text-secondary text4'></IoMdArrowDropleft>
      </button>{[currentIndex]} - 8
      <button className="arrow-button right" onClick={handleForwardClick}>
      <IoMdArrowDropright className='text-secondary text4'></IoMdArrowDropright>
      </button>
     
    </footer>
  );
};

export default Footer1;