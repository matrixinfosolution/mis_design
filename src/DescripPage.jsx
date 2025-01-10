import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DescripPage.css';
const DescripPage=()=>{
    return(
        <Container>
            <Row className='wrapper'>
                <Col lg={12}>
                    
                    <h2>Hi,Durgaprasad!</h2>
                
                    <div className="wrapper-text">
                        <p>IMPORTANT!Please read Before moving forward!</p>
                        <div>
                            <ol>
                                <li className="faq-item">
                                    <div className="question-ans">
                                    <p className="question">Have you read our<strong style={{color:'blue'}}> Instructions?</strong></p>
                                    <p className="answer">Please ensure you have read these instructions before starting your submission!We expect all submissions to studiously adher to our formatting requirements.Articles with too many errors will either be rejected or require the purchase of our Preferred Editing service.</p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <div className="question-ans">
                                        <p className="question">Do not write your article on the Cureus website!</p>
                                        <p className="answer">Please write and format your article offline before starting your submission.</p>
                                    </div>

                                </li>
                                <li className='faq-item'>
                                    <div className="question-ans">
                                        <p className='question'>Know your responsibilities as the submitting author:</p>
                                        <ul className='faq-list'>
                                            <li>
                                                <p className='answer'>Author cannot be added after article submission.</p>
                                            </li>
                                            <li><p className="answer1">Only the submitting author can edit the article,author names and affiliations.</p></li>
                                           <li><p className='answer1'>If you are submitting on behalf of an author you must sign in with the author's account before continuing.</p></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <div className="question-ans">
                                        <p className="question">We do not accept the following article submissions:</p>
                                        <ul className='faq-list'>
                                            <li>
                                                <p className='answer'>Min-reviews(Only comprehensive reviews will be considered.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <p>Thanks for choosing to publish with Cureus!</p>
                    </div>
                    <div className="butts">
                        <button className="button1">Cancel</button>
                        <button className="button2">Get Started</button>
                    </div>
                </Col>
            </Row>
        </Container>

    );

}
export default DescripPage;