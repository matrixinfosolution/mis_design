import React from "react";
import FloatingLabelInput from "../GlobalComponent/Elements/FloatingLabelInput";
import { Col, Container, Row } from "react-bootstrap";
import FixedTopLabelInput from "../GlobalComponent/Elements/FixedTopLabelInput";
import { FiSearch, FiEye } from "react-icons/fi"; // Example icons
import InputEL from "../GlobalComponent/Elements/InputEL";


const Testing = () => {

  return (
    <>
      <Container fluid className="p-2" >
        <Row>
          <Col md={3}>
            <FloatingLabelInput type="text" label="Floating Input" size="md" />
          </Col>
          <Col md={3}>
            <FixedTopLabelInput type="text" label="Fixed Input" size="md"
              placeholder="enter name"
            />
          </Col>
          <Col md={3}>
          <InputEL
            label="Email"
            type="email"
            id="floatingEmail"
            placeholder="name@example.com"
            size="sm"
            startIcon={<FiSearch style={{color:"#000"}}/>}
            endIcon={<FiEye />}
            readOnly={false}
            disabled={false}
            eventHandlers={{
            onBlur: (e) =>{ alert(1);alert(2);},            
          }}
          />
          </Col>
          <Col md={3}>
          <InputEL
            label="Mobile Number"
            type="number"
            id="floatingEmail"
            placeholder="name@example.com"
            size="sm"           
            readOnly={false}
            disabled={false}
            hideStepper={true}
          />
          </Col>
          <Col md={3}>
          <InputEL
            label="Mobile Number"
            type="number"
            id="floatingEmail"
            placeholder="name@example.com"
            size="sm"           
            readOnly={false}
            disabled={false}
            hideStepper={true}
            variant="standard"
          />
          </Col>
       
        </Row>
      </Container>
    </>
  );
};

export default Testing;
