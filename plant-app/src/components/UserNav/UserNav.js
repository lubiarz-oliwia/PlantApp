import React from 'react'
import { ButtonComponent } from '../Button/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../scss/main.scss';
import greenTea from "../../images/greenTea.png";

export const UserNav = ({ logOut }) => {

    return (
        <Row className="justify-content-between" style={{marginTop:"20px"}}>
            <Col
                lg={2}
                md={2}
                sm={2}
            >
                <div className="logo"><img src={greenTea}/><p>PlantApp</p></div>
            </Col>
            <Col
                lg={2}
                md={2}
                sm={2}
            >
               <ButtonComponent
                    children="Wyloguj się!"
                    className="logoutButton"
                    onClick={logOut}
                >
                </ButtonComponent>
            </Col>
        </Row>
    )
};


