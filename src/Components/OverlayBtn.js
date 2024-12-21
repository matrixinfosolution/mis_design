import React from 'react';
import './OverlayBtn.css' // Import your custom CSS file for styling
import { Button, Row, Col,Container } from 'react-bootstrap';
const OverlayBtn = () => {
  return (
    <Container fluid className="position-relative">
      {/* Image container */}
      <div className="overlay-image">
       
          <Row className="justify-content-center text-center">
            <Col xs={12} md={8} lg={6}>
            <div className="overlay-content">
          <h1 className='text-overlay'>A New Era of Open Access Journals</h1>

          <div className="button-group">
            <Button variant="primary" className="overlay-btn">Submit Your Research</Button>
            <Button variant="secondary" className="overlay-btn">Read the Journal</Button>
            </div>
               <div className="overlay-text1">
                <p className="description">Cureus is a Springer Nature journal leveraging the power of an online, crowdsourced community platform to share and promote published academic knowledge around the world.</p>
                </div>
                </div>
                </Col>
                </Row>
       
      </div>
    </Container>
  );
};
export default OverlayBtn;