import React from 'react'

import '../../scss/main.scss';

import { ButtonComponent } from '../Button/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenTea from "../../images/greenTea.png";



export const UserNav = ({logOut}) => {

    return (
        <Row className="justify-content-between nav">
            <Col lg={2} md={2} sm={2} className="logo">
                <p><img src={greenTea} />PlantApp</p>
            </Col>
           <Col lg={2} md={2} sm={2}>            
           <ButtonComponent children="Wyloguj się!" className="logoutButton" onClick={logOut}></ButtonComponent>
           </Col>
        </Row>
    )
};
