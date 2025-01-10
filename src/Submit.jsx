import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineChevronRight } from "react-icons/md";
import './Submit.css';
const Submit=()=>{
return(
    <Container>
        <div className="app-container">
    <header>
        <h6 style={{textAlign:'left'}}>Getting Started <span style={{textAlign:"center"}} className='arrow'><MdOutlineChevronRight/> </span>Journal</h6>
    </header>
    <section className='description'>
    <p>Please select Journal in which you wish to submit the article</p>
    <h4>Make sure you select the correct Journal!</h4>
    <div>
        <select>
            <option>Select Journal</option>
        </select>
    </div>
    </section>
    </div>
    <div className="button-container">
        <button className="but1">SAVE</button>
        <button className="but2">SAVE AND CONTINUE</button>
    </div>
    
    </Container>
);
}
export default Submit;