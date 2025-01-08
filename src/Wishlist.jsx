import React from 'react';
import Modal from './Modal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
const Wishlist=()=>{
    return(<Container>
        <Row>
            <Col lg={4}>
            <Modal></Modal>
            </Col>
        </Row>
    </Container>

    )
}
export default Wishlist;