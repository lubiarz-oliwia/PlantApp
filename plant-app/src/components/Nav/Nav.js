import React from 'react';
import { ButtonComponent } from '../Button/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenTea from "../../images/greenTea.png";
import '../../scss/main.scss';

export const Nav = ({ logIn }) => {

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
                    children="Zaloguj się!"
                    variant="info"
                    //className="submitButton"
                    onClick={logIn}
                >
                </ButtonComponent>
            </Col>
        </Row>
    )
};
