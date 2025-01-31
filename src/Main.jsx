import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer1 from './Footer1';
import './Main.css';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import abstract from './Images/abstract.png';
import  bad from './Images/abstract-bad.png';
import author from './Images/author.png';
import format from './Images/format.png';
import format2 from './Images/format-2.png';
import media from './Images/media.png';
function Page1() {
    return (
        <Row>
        <Col lg={12}>
        <div className="container mt-4">
           
            <div className="circle">
          <span className="check">&#10004;</span>
        </div>
        <p className="text">Correct: Exploring Graphene's Mechanical Strength and Its Industrial Applications in Engineering</p>
        </div>
        </Col>
        <Col lg={12}>
        <div className="container mt-4">
           
            <div className="circle_2">
          <span className="check1">&#10060;</span>
        </div>
        <p className="text">Incorrect: EXPLORING GRAPHENE`S MECHANICAL STRENGTH AND ITS INDUSTRIAL APPLICATIONS IN ENGINEERING</p>
        </div>
        </Col>
        <Col lg={12}>
        <div className="container mt-4">
           
            <div className="circle_2">
          <span className="check1">&#10060;</span>
        </div>
        <p className="text">Incorrect: Exploring graphene`s mechanical strength and its industrial applications in engineering.</p>
        </div>
        </Col>
            </Row>
        
      
      
       
     
    );
  }
  
  function Page2() {
    return(
   <Row>
    <Col lg={6}  className="text-image-container">
    <div>
    <div className="container mt-3 mb-3">
        
           <div className="circle">
         <span className="check">&#10004;</span>
       </div>
       <p className="text">Correct</p>
       </div>
   <img src={abstract}/>
   </div>
    </Col>
    <Col lg={6} className="text-image-container">
    <div >
    <div className="container mt-3 mb-3">
           
           <div className="circle_2">
         <span className="check1">&#10060;</span>
       </div>
       <p className="text">Incorrect</p>
       </div> 
       <img src={bad}/>
       </div>
    </Col>
   </Row>
    );
  }
  
  function Page3() {
return(
    <Row>
    <Col lg={12} className="text-image-container">
        <div>
    <p style={{fontSize:"22px"}}>How should I format my keywords?</p>
    <div className="container mt-4">
       
        <div className="circle">
      <span className="check">&#10004;</span>
    </div>
    <p className="text">Correct: Graphene, mechanical strength, industrial applications, engineering</p>
    </div>
   
    
    
        <div className="container mt-4">
           
            <div className="circle_2">
          <span className="check1">&#10060;</span>
        </div>
        <p className="text">Incorrect: Graphene, Mechanical Strength, Industrial Applications, Engineering</p>
        </div>
        </div>
        </Col>
    </Row>
)
  }
  
  
  function Page4() {
    return(
        <Row>
        <Col lg={12} className="text-image-container m-4">
          <div> 
        <p style={{fontSize:"22px"}} className='text'>Author affiliations</p>
        <p className='text'>Author affiliations (department, institution, location) will be listed in XXXX and cannot be altered after the article has been indexed. In cases where two or more authors hail from the same department or institution, affiliations should be entered consistently for all relevant authors.</p>
        <img src={author}/>
        </div> 
        </Col>
        </Row>

    );
  }
  
  function Page5() {
    return (
        <Row>
        <Col lg={12} className="text-image-container">
            <div>
        <p style={{fontSize:"22px"}}>How should I format my Article Citation?</p>
        <div className="container mt-4">
           
            <div className="circle">
          <span className="check">&#10004;</span>
        </div>
        <p className="text">Correct: Like the Brown study [1], Reynolds, et al. also found a statistically significant decrease in procedure and fluoroscopy time with subsequent trials [2]. The most recent studies involved the evaluation of a 120-minute simulator-based training course for 37 participants [3-5].</p>
        </div>
        <div className="container mt-4">
           
           <div className="circle">
         <span className="check">&#10004;</span>
       </div>
       <p className="text"> Correct: Like the Brown study, Reynolds, et al. also found a statistically significant decrease in procedure and fluoroscopy time with subsequent trials [1,2]. The most recent studies involved the evaluation of a 120-minute simulator-based training course for 37 participants [3-5].</p>
       </div>
        
        
            <div className="container mt-4">
               
                <div className="circle_2">
              <span className="check1">&#10060;</span>
            </div>
            <p className="text"> Incorrect: Like the Brown study, Reynolds, et al. also found a statistically significant decrease in procedure and fluoroscopy time with subsequent trials. [1, 2, 3] The most recent study involved the evaluation of a 120-minute simulator-based training course for 37 participants[4, 5].</p>
            
            </div>
            <p className='text mt-4'>Note: Citations are not permitted in figure, table or video titles, however, they may be included in the legend.</p>
            </div>
            </Col>
        </Row>
    );
  }
  
  function Page6() {
    return (<Row>
        <Col lg={12} className="text-image-container m-3">
          <div> 
        <p style={{fontSize:"22px"}} className='text'>How should I format my subheaders?</p>
        <p className='text me-3'>Cureus allows two levels of subheaders. The first (and highest) level should utilize the Subheading style available via the dropdown menu to the left of the italics button. These subheaders should be in sentence case and on a line separate from the rest of the text.</p>
       <div className='timg'>
        <img src={format} className='mt-3'/>
        </div>
        <p className='text mt-3'>The second subheader level should be in title case, italicized and on a line separate from the rest of the text.</p>
        </div>
        <div className='timg'>
            <img src={format2}/>
        </div>
        </Col>
        </Row>

    );
  }
  
  function Page7() {
    return (
        <Row>

        <Col lg={12} className="text-image-container">
            <div>
        <p style={{fontSize:"22px"}} className='text m-3'>How do I add figures, tables, videos or interactive models?</p>
        <ol>
            <li className='text me-3'> To add media to your article first place your cursor in the desired location in the media article section text field and click one of the Insert Figure, Insert Table, Insert Video or Insert Interactive Model buttons on the article section toolbar</li>
        <li className='text me-3 mt-3'>You will then be prompted to upload the figure, paste the table or video/interactive model URL, and add a title and optional legend.</li>
        <li className='text me-3 mt-3'>For more detailed instructions, see our <span style={{color:"#0D98BA"}}>Media Instructions</span> page.</li>
        </ol>
        <div className='timg'>
            <img src={media}/>
        </div>
        </div>
</Col>
        </Row>
    );
  }
  
  function Page8() {
    return (
        <Row>
            <Col lg={12} className='text-image-container'>
                <div>
                    <p tyle={{fontSize:"22px"}} className='text m-3'>How do I correctly mention figures, tables, videos and interactive models in the text?</p>
                    <p className='text ms-3'>Each media item must be mentioned in the paragraph immediately preceding it. For more detailed instructions, see our<span style={{color:"#0D98BA"}}> Media Instructions</span> page.</p>
                </div>
            </Col>

        </Row>
    );
  }
  
const Main=()=> {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div>
        <Routes>
        <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
        </Routes>
        
        {/* Footer with arrow buttons for navigation */}
        <Footer1 />
      </div>
    </Router>
  );
}

export default Main;