import React from 'react'


import '../../scss/main.scss';
import Card from 'react-bootstrap/Card';

import { ButtonComponent } from '../Button/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenTea from "../../images/greenTea.png";

import background2 from "../../images/background2.jpeg";
import background3 from "../../images/background3.jpeg";
import background4 from "../../images/background4.jpeg";
import cart2 from "../../images/cart2.jpeg";
import buy1 from "../../images/buy1.jpeg";

export const UserCard = () => {

    return (
        <>
        <Row>
            <Col lg={4}>
                <Card>
                    <Card.Body className="card">
                        <img
                            className="d-block w-100"
                            src={background2}
                            alt="Plants"
                        />
                        <ButtonComponent children="KUPIONE" className="buyButton"></ButtonComponent>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Body className="card">
                        <img
                            className="d-block w-100"
                            src={background3}
                            alt="Plants"
                        />
                        <ButtonComponent children="SPRZEDANE!" className="sellButton"></ButtonComponent>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Body className="card">
                        <img
                            className="d-block w-100"
                            src={background4}
                            alt="Plants"
                        />
                        <ButtonComponent children="TWOJE DANE" className="submitButton"></ButtonComponent>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
        <Col lg={6}>
                <Card>
                    <Card.Body className="card">
                        <img
                            className="d-block w-100"
                            src={cart2}
                            alt="Plants"
                        />
                        <ButtonComponent children="KUPUJ!" className="buyButton"></ButtonComponent>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <Card.Body className="card">
                        <img
                            className="d-block w-100"
                            src={buy1}
                            alt="Plants"
                        />
                        <ButtonComponent children="SPRZEDAJ!" className="sellButton"></ButtonComponent>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>

    )
};
