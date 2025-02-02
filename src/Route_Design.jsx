import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './route1.css';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import Abstract from './Abstract';

const Route_Design=()=>{
    const [selectedButton, setSelectedButton] = useState('button1');
    const [isOpen, setIsOpen] = useState(false);  
    const [activeSection, setActiveSection] = useState("null");
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
      };
  // List of TOC items
  const sections = [
    { id: "section-1", title: "Abstract" },
    { id: "section-2", title: "Introduction" },
    { id: "section-3", title: "Materials and Methods" },
    { id: "section-4", title: "Result" },
    {id:"section-5", title:"Discussion"},
    {id:"section-6",title:"Conclusion"},
{id:"section-7",title:"References"}
  ];
 
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observing each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  

  // Function to handle button click and set selected button
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
    return(
      
    <Container>
          
          <Row className='pr-toc-container'>
          <Col lg={3} className='pr-toc'>
            
           
   <div className="pr-toc-item" onClick={toggleDropdown}>
     <span className="pr-toc-title">Table of Contents</span>
     <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
   </div>
   {isOpen &&  (
             
   <ul>
       {sections.map((section) => (
         <li
           key={section.id}
           onClick={() =>  handleScrollTo (section.id)}
           className={activeSection === section.id ? 'active' : ''}
         >
           {section.title}
         </li>
       ))}
     </ul>
 
     )}
  
 </Col>
 <Col lg={9} >
  <div className="pr-fixed-container">
  <section className="pr-custom-border-section">
    <div className="pr-custom-border-section1">
      <p className="pr-right-text">Orignal article</p>
      </div>
      <h2 className="pr-section-title">Design of a Small Slotted Partial Grounded Fifth-Generation Patch Antenna at 3.5 GHz with Improved Performance</h2>
      
        <div className="mt-3 pr-section-description">
      <a href="#">Sayed Abdul Hadi • Abu Zafor Muhammad Touhidul Islam</a>
      <p className="mt-3">Journal: Cureus Journal Of Engineering</p>
      
      <Row>
        <Col lg={5}>
            <p>Published: January 28, 2025</p>
        </Col>
        <Col lg={7}>
            <p>DOI: https://doi.org/10.7759/s44388-024-02790-8 </p>
        </Col>
      </Row>
      <p style={{textAlign:"center"}} className="ms-3">Published</p>
      
      </div>
      <p style={{fontWeight:"bold"}}>Cite this article as: Hadi S, Islam A (January 28, 2025) Design of a Small Slotted Partial Grounded Fifth-Generation Patch Antenna at 3.5 GHz with Improved Performance. Cureus J Eng 2 : es44388-024-02790-8. doi:https://doi.org/10.7759/s44388-024-02790-8</p>
    </section>
       {/* <Router>
      <div>
        <nav>
          <button>
            <Link to="/page1">Go to Page 1</Link>
          </button>
          <button>
            <Link to="/page2">Go to Page 2</Link>
          </button>
          <button>
            <Link to="/page3">Go to Page 3</Link>
          </button>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/" element={<h2>Welcome Home!</h2>} />
        </Routes>
      </div>
    </Router>*/}
    
     <div className='pr-container1'>
     <button
        className={`button ${selectedButton === 'button1' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button1')}
      >
        Article
      </button>
      <button
        className={`button ${selectedButton === 'button2' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button2')}
      >
        Authors etc.
      </button>
      <button
        className={`button ${selectedButton === 'button3' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button3')}
      >
        Metrics
      </button>
      <button
        className={`button ${selectedButton === 'button4' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button4')}
      >
        Comments
      </button>
      </div>
      
      </div>
     
      
      
      <main className='pr-main-content'>
      <Row>
      <Col lg={12}>
        {selectedButton === 'button1' && <Abstract/>}
      {selectedButton === 'button2' && <div>Content for Button 2</div>}
      {selectedButton === 'button3' && <div>Content for Button 3</div>}
        </Col>
      </Row>
      </main>
      </Col>
      </Row>
      </Container>
      
    
    )
}
export default Route_Design;