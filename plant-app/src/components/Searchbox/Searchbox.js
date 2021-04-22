import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Searchbox = ({ onSearchboxChange }) => {
  const [current, setCurrent] = useState("");

  return (
    <>
      <Row className="justify-content-md-center" style={{ marginBottom: "10px" }}>
        <Col lg={12} style={{ marginTop: "10px" }} >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Szukaj</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder=""
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={current}
              onChange={e => {
                setCurrent(e.target.value);
                onSearchboxChange(current);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  )
};


