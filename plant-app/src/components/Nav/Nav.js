import React from 'react'

import greenTea from "../../images/greenTea.png";

import '../../scss/main.scss';
import { ButtonComponent } from '../Button/Button';


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Nav = ({logIn}) => {

    return (
        <Row className="justify-content-between nav">
            <Col lg={2} md={2} sm={2} className="logo">
            
                <p><img src={greenTea} />PlantApp</p>
          
            </Col>
           <Col lg={2} md={2} sm={2}>            
           <ButtonComponent children="Zaloguj się!" className="submitButton" onClick={logIn}></ButtonComponent>
           </Col>
        </Row>
    )
};
