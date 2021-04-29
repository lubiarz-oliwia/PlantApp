import React from 'react';
import { ButtonComponent } from './Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenTea from "../images/greenTea.png";
import '../scss/main.scss';

export const Nav = ({ onButtonClick, buttonText }) => (
    <Row className="justify-content-sm-between" style={{ justifyContent: "between", marginTop: "20px" }}>
        <Col xs={2}>
            <div className="logo"><img src={greenTea} /><p>PlantApp</p></div>
        </Col>
        <Col xs={2}>
            <ButtonComponent
                children={buttonText}
                onClick={onButtonClick}
            >
            </ButtonComponent>
        </Col>
    </Row>
)
