import React,{useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa6";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import './BtnAccordian.css';
const BtnAccordian=()=>{
const [isVissible,setIsVisible]=useState(false);

const toggleAccordion=()=>{
    setIsVisible(!isVissible)
}
    const data=[
        {id:1,name:'WordPress',quantity:'184'},
        {id:2,name:'eCommerce',quantity:'174'},
        {id:3,name:'Site Templates',quantity:'69'},
        {id:4,name:'UI Templates',quantity:'36'},
        {id:5,name:'CMS Themes',quantity:'21'},
        {id:6,name:'Blogging',quantity:'1'}
    ]
return(
    <Container fluid>
        
<div className="accordion" onClick={toggleAccordion}>
    <div className='item'>
        
        <h4 className="text">Category</h4>
        <FaChevronUp className={`icon ${isVissible ? "rotate" :""}`}></FaChevronUp>
        </div>
        <div className={`hidden-box ${isVissible ? 'active-box': ""}`}>
        <Row>
                <Col lg={9} md={6} sm={6}>
                    <h6 className="text1">All Categories</h6>
                    <div className='accordion-items'>
                    {
                        data.map((item)=>(
                            <div key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                    </div>
                </Col>
                <Col lg={1} md={6} sm={6}>
                    <h6>486</h6>
                    <div>
                    {
                        data.map((item)=>(
                            <div key={item.id}>
                                <p>{item.quantity}</p>
                            </div>
                        ))
                    }
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    </Container>
);
}
export default BtnAccordian;