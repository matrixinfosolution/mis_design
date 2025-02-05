import React, { useState ,useEffect,useRef} from 'react';
import { Container,Row,Col ,Card} from 'react-bootstrap';
import './route.css';
import Abstract1 from './Abstract1';
import { FaFilePdf, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const Design=()=>{
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    pdf
    </Tooltip>
  );

  const renderTooltip1= (props) => (
    <Tooltip id="button-tooltip" {...props}>
      email share
    </Tooltip>
  );
  const renderTooltip2= (props) => (
    <Tooltip id="button-tooltip" {...props}>
      share citation
    </Tooltip>
  );
    const [selectedButton, setSelectedButton] = useState('button1');
    
    const [isOpen, setIsOpen] = useState(false);  
    const [activeSection, setActiveSection] = useState("null");
    const [boxOpen, setBoxOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
      };
  // List of TOC items
  const sections1 = [
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
    sections1.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [sections1]);
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return(
    <Container fluid>
        <Row >
            <Col lg={2} className='tr-contains'>
              <div className='tr-toc1'>
            <div className="tr-toc-item1" onClick={toggleDropdown}>
     <span className="tr-toc-title1">Table of Contents</span>
     <span className={`tr-dropdown-arrow ${isOpen ? "open1" : ""}`}>▼</span>
   </div>
   
   {isOpen &&  (
          
   <ul>
       {sections1.map((section1) => (
         <li
           key={section1.id}
           onClick={() =>  handleScrollTo (section1.id)}
           className={activeSection === section1.id ? 'active' : ''}
         >
           {section1.title}
         </li>
       ))}
     </ul>
    
     )}
        </div> 
       </Col>
       <Col lg={8} md={8} sm={12}>
       <Row>
            <Col lg={12} md={12} sm={12}>
        <Card className='tr-customs'>
          <Card.Body className="d-flex align-items-center justify-content-center">
        <div className='tr-text-center'>     
      <p className="tr-right-text">Orignal article</p>
      <Card.Title className='tr-text-center'>
            <h3>Design of a Small Slotted Partial Grounded Fifth-Generation Patch Antenna at 3.5 GHz with Improved Performance</h3>
            </Card.Title>
            <Card.Text>
            <a href="#" className='tr-text'>Sayed Abdul Hadi • Abu Zafor Muhammad Touhidul Islam</a>
      <p className="mt-3">Journal: Cureus Journal Of Engineering</p>
      <Row>
        <Col lg={5} sm={5}>
            <p>Published: January 28, 2025</p>
        </Col>
        <Col lg={7} sm={5}>
            <p>DOI: https://doi.org/10.7759/s44388-024-02790-8 </p>
        </Col>
      </Row>
      <p style={{textAlign:"center"}} className="ms-3">Published</p>
      
    
      <p style={{fontWeight:"bold"}}>Cite this article as: Hadi S, Islam A (January 28, 2025) Design of a Small Slotted Partial Grounded Fifth-Generation Patch Antenna at 3.5 GHz with Improved Performance. Cureus J Eng 2 : es44388-024-02790-8. doi:https://doi.org/10.7759/s44388-024-02790-8</p>
      </Card.Text>
      </div>
      </Card.Body>
      </Card>
            </Col>
           
           <Col lg={12}>
           <div className='tr-container1 mt-3 ms-4'>
     <button
        className={`button ${selectedButton === 'button1' ? 'tr-selected' : ''}`}
        onClick={() => handleButtonClick('button1')}
      >
        Article
      </button>
      <button
        className={`button ${selectedButton === 'button2' ? 'tr-selected' : ''}`}
        onClick={() => handleButtonClick('button2')}
      >
        Authors etc.
      </button>
      <button
        className={`button ${selectedButton === 'button3' ? 'tr-selected' : ''}`}
        onClick={() => handleButtonClick('button3')}
      >
        Metrics
      </button>
      <button
        className={`button ${selectedButton === 'button4' ? 'tr-selected' : ''}`}
        onClick={() => handleButtonClick('button4')}
      >
        Comments
      </button>
      </div>
           </Col>
           
           <Col lg={12}>
            
        {selectedButton === 'button1' && <Abstract1/>}
      {selectedButton === 'button2' && <div>Content for Button 2</div>}
      {selectedButton === 'button3' && <div>Content for Button 3</div>}
           </Col>
           
           </Row>
           </Col>
           <Col lg={2} className='mt-3 tr-icon-container'>
           <div className="tr-icon">
           <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
        <FaFilePdf size={20} />
        </OverlayTrigger>
      
      </div>
      <div className="tr-icon">
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
        <FaEnvelope size={20} />
        </OverlayTrigger>
        
      </div>
      <div className="tr-icon">
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip2}
    >
        <FaShareAlt size={20} />
        </OverlayTrigger>
      
      </div>
           </Col>
        </Row>
    </Container>

  );
}
export default Design;