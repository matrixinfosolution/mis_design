import React,{useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
import { RiDraftLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Draft.css';
const Draft=()=>{
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Edit
        </Tooltip>
      );

      const renderTooltip1= (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Delete
        </Tooltip>
      );
return(<Container >
    <Row  className='input-group'>
        <Col lg={12} >
            <Row>
                <Col lg={8} className='wrapper1' >
                    <p>Test</p>
                    <button className='text2'>ORIGINAL ARTICLE</button>
                    <p  className='text3'>Journal-<span style={{color:'#0D98BA'}}>Engineering</span></p>
                    <Row>
                     <Col lg={2}>
                     <p><RiDraftLine />  Draft</p>
                        </Col> 
                        <Col lg={4}>
                        <span className='text4'>Step 1 of 7</span>
                            </Col>  
                            </Row>
                    
                        <Row>
                            <Col lg={2}>
                                <b style={{fontSize:"13px"}}>AUTHORS</b>
                            
                            </Col>
                            <Col lg={4}>
                                <p style={{color:'#0D98BA'}}>Durgaprasad B. Kadam,A X. B</p>
                            </Col>
                        </Row>

                    
                     
                </Col>
                
                <Col lg={4} className='wrapper2'>
                
                    <Row className='d-flex justify-content-end align-items-end'>
                    <Col lg={1}>
                    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
                    <MdModeEdit />
                    </OverlayTrigger>
                    </Col>
                    <Col lg={1}>
                    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
                    <RiDeleteBinFill />
                    </OverlayTrigger>
                    </Col>
                    </Row>
                    <button className='text5'>PROGRESS</button>
                 </Col>
                
                   
                 </Row>
                 </Col> 
            </Row>
        
    
</Container>
);
}
export default Draft;