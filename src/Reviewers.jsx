import React,{useState} from 'react';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import './Review.css';
import work1 from './Images/work4.jpg';
import Content from './Content';
const Reviewers=()=>{
    const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
return(
<Container fluid>
<Row>
    
    
    <Col lg={7} className='d-flex flex-column gap-1 wrapper5'>
        <h2 style={{color:"#0D98BA"}}>It's a peer review party! Who will you invite?</h2>
        <p>There’s no cake, but we can still celebrate (and improve) your hard work. Search for an email address below to see if the reviewer you’d like to invite already has a Cureus account. If not, you’ll be prompted to enter their basic information. If your article is approved for peer review, each reviewer will receive an email invitation to review (and register if they haven’t already).</p>
        <b>You must suggest at least five potential reviewers.</b>
        <p>Reviewers will remain anonymous. Do not add yourself or co-authors to the reviewer list.</p>
        <b>Cureus will invite at least six reviewers.</b>
        <p>In addition to these author-suggested reviewers, a minimum of six peer reviewers are automatically invited from the Cureus internal peer review panel, consisting of relevant specialists who have either volunteered for the panel or previously published as an author in Cureus. This ensures that a minimum of 11 peer reviewers are invited to review each article</p>
        <b>How many reviews do I need?</b>
        <p>Two completed reviews from Cureus-invited reviewers are required to satisfy peer review. Articles with a Cureus Laureate author still require two completed reviews, but only one must be from a Cureus-invited reviewer.</p>
   
        <div className="d-flex w-100">
      <Form onSubmit={handleSubmit}>
        {/* Form Label and Button placed horizontally */}
        <Form.Label className="me-2">Reviewer email address:</Form.Label>
        <Form.Group controlId="formInput" className="mb-0 d-flex align-items-center">
          
          <Form.Control
            type="text"
            placeholder="example@gmail.com"
            value={inputValue}
            onChange={handleChange}
            className="me-2"
          />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
      
    </Col>
    
    
    <Col lg={5} className='mt-5'>
        <img src={work1} className='work-img'></img>
    </Col>
    <Col lg={11}>
        <Content></Content>
    </Col>
    
    </Row>
    

</Container>
)
}
export default Reviewers;