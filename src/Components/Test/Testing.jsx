import React from "react";
import FloatingLabelInput from "../GlobalComponent/Elements/FloatingLabelInput";
import { Col, Container, Row } from "react-bootstrap";
import FixedTopLabelInput from "../GlobalComponent/Elements/FixedTopLabelInput";
import { FiSearch, FiEye } from "react-icons/fi"; // Example icons

const Testing = () => {
  return (
    <>
      <Container fluid className="p-2" style={{ backgroundColor: "yellow" }}>
        <Row>
          <Col md={3}>
            <FloatingLabelInput type="text" label="Floating Input" size="md" />
          </Col>
          <Col md={3}>
            <FixedTopLabelInput type="text" label="Fixed Input" size="md"                          
             />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testing;
