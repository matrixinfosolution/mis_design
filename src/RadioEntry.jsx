import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineChevronRight } from "react-icons/md";
import './RadioEntry.css';
const RadioEntry=()=>{
    return(<Container>
         <div className="app-container">
    <header>
        <h6 style={{textAlign:'left'}}>Getting Started <span style={{textAlign:"center"}} className='arrow'><MdOutlineChevronRight/> </span>Competition</h6>
    </header>
    <section className="description">
        <h1>Is this a competition entry?</h1>
        <p>Cureus hosts sponsored publishing competitions to encourage scientific discovery and experirnces-be they positive,negative, or neuteal-and foster broder educational outreach through Open Access publication that is free to both authors and readers.<span className='text'>Click here to learn more.</span></p>
    <div className="radio-btn">
    <label>
        <input type="radio"  name="options"
              value="option1"></input> No,this is not a competition entry.
    </label>
    </div>
<div className="radio-btn">
    <label>
        <input type="radio"  name="options"
              value="option1"></input> Yes,this is a competition entry.
    </label>
    </div>
    <div className="button-container1">
        <button className="but3">SAVE</button>
        <button className="but4">SAVE AND CONTINUE</button>
    </div>
    </section>
        </div>
       
        
        
    </Container>

    )
}
export default RadioEntry;