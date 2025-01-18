import React from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import work from './Images/work.jpg';
import './DropnDrag.css';
import DropDragRow from './DropDragRow';
const DropnDrag=()=>{
    return(
        <Container fluid>
            <Row>
                <Col lg={8} className='d-flex flex-column gap-1 wrapper1'>
                <h1 style={{color:"#0D98BA"}}> Please list your co-authors.</h1>
          <span>
          <b>This is some text beside the image. The text will adjust according to the screen size.</b>
        Original articles with 31 or more authors will require Preferred Editing regardless of how many errors are found during our preliminary review.

          </span>
          <span>
            <b>You are responsible for ensuring that all author names and affiliations are accurate and consistently formatted</b>
            Your co-authors cannot edit this information. Affiliations from the same institution must be identically formatted! Failure to do so will hurt your chances of receiving free publication. If two or more authors are from the same academic institution, the institution name entered in this field must be identical for those authors. If these authors are also from the same department, then the information in the department field must also be identical. This includes spelling, capitalization, spacing, etc<span style={{color:"#0D98BA"}}> Show me examples
          </span>
          </span>
          <span>
            <b>Changing the corresponding author, order of authors, or author email addresses</b>
            You can revise incorrect or out-of-date email addresses via the arrow button next to each co-author. Click the empty circle to the left of an author name to designate them as the corresponding author. (This designation is activated upon publication.) To reorder the author list, just click on the left column and drag the author to the desired position

          </span>
          <span>
            <b>Student authors must include a senior author.</b>
            A senior author has completed their training (for example, faculty member or industry expert). Submissions authored by medical students without a senior author will be rejected.<span style={{color:"#0D98BA"}}> See our Author Guide for more information.</span>

          </span>
          <span className='mb-4'>
            <b>Authors cannot be added after you submit your article.</b>
            Enter each co-author’s email address below. You will not be able to change co-author email addresses after submitting so please ensure that there are no types
          </span>
          <div className="d-flex align-items-center w-50 gap-2">
          <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Label>Author email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
       
      </Form.Group>
      
      <button className='button1'> Search</button>
      </div>
                </Col>
                <Col lg={4} className='mt-5'>
                <img src={work} className='work-img'></img>
                </Col>
                <Col lg={12}>
                    <DropDragRow></DropDragRow>
                </Col>
            </Row>
        </Container>
    )
}
export default DropnDrag;