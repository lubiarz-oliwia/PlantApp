import React from 'react';
import { ButtonComponent } from '../Button/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import background2 from "../../../images/background2.jpeg";
import background3 from "../../../images/background3.jpeg";
import background4 from "../../../images/background4.jpeg";
import cart2 from "../../../images/cart2.jpeg";
import buy1 from "../../../images/buy1.jpeg";
import '../../../scss/main.scss';

export const UserCard = ({ sellPlant, buyPlant, boughtPlant, yourData, soldPlants }) => {

    return (
        <>
            <Row className="justify-content-center">
                <Col
                    lg={4}
                >
                    <Card>
                        <Card.Body
                            className="card"
                        >
                            <img
                                className="d-block w-100"
                                src={background2}
                                alt="Plants"
                            />
                            <ButtonComponent
                                children="KUPIONE"
                                className="buyButton"
                                onClick={boughtPlant}
                            >
                            </ButtonComponent>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                >
                    <Card>
                        <Card.Body
                            className="card"
                        >
                            <img
                                className="d-block w-100"
                                src={background3}
                                alt="Plants"
                            />
                            <ButtonComponent
                                children="SPRZEDANE!"
                                className="sellButton"
                                onClick={soldPlants}
                            >
                            </ButtonComponent>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                >
                    <Card>
                        <Card.Body
                            className="card"
                        >
                            <img
                                className="d-block w-100"
                                src={background4}
                                alt="Plants"
                            />
                            <ButtonComponent
                                children="TWOJE DANE"
                                className="submitButton"
                                onClick={yourData}
                            >
                            </ButtonComponent>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{ marginTop: "30px" }}>
                <Col
                    lg={6}
                >
                    <Card>
                        <Card.Body
                            className="card"
                        >
                            <img
                                className="d-block w-100"
                                src={cart2}
                                alt="Plants"
                            />
                            <ButtonComponent
                                children="KUPUJ!"
                                className="buyButton"
                                onClick = {buyPlant}
                            >
                            </ButtonComponent>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={6}
                >
                    <Card>
                        <Card.Body
                            className="card"
                        >
                            <img
                                className="d-block w-100"
                                src={buy1}
                                alt="Plants"
                            />
                            <ButtonComponent
                                children="SPRZEDAJ!"
                                className="sellButton"
                                onClick= {sellPlant}
                            >
                            </ButtonComponent>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
};
