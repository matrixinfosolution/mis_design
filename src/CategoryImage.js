import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import mac from './Images/mac.jpg';
import './CategoryImage.css';
const CategoryImage=()=>{
    return(
        <>
        <Container fluid>
            <div className="container my-5">
            <Row>
                
                
                <Col md={6} sm={6} lg={6} className='p-0'>
                    
                   
                        <img src={mac} alt="work" className='workimg'/>
                        
                        </Col>
                        <Col md={6} sm={6} lg={6} className='flex-sm-row'>
                            
                          <Row>
                        <div className="tag-1">
                          <p>JAVASCRIPT</p><span>27 March, 2018</span>
                         </div>
                         </Row>  
                        <Row>
                    
                            <div className="text-content">
                        
                           <p> Chrome Extension Protects Against Javascript Based CPU Side-Channel Attacks</p>
                           </div>
                           </Row>
                           <Row>
                            <div className="content">
                                <div className="text-item">Dipankar Saha</div>
                                <div className="vr"/>
                                <div className='text-item'>November 25,2024</div>
                            </div>
                           </Row>
                           
                        
                        
                        </Col>
                        
                        
                    </Row>
                
            </div>
            </Container>

        </>
    )
}
export default CategoryImage;