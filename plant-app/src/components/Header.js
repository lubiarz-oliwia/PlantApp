import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import header from "../images/header.jpeg";
import '../scss/main.scss';

export const Header = () => (
    <header>
        <Row>
            <Col lg={5}>
                <div>
                    <h1>Twoja platforma do
                        <span> kupowania </span>
                             i
                        <span> sprzedawania </span>
                             roślin!
                        </h1>
                    <h2>To idealne miejsce dla Ciebie, jeżeli szukasz tanich
                    kwiatów do zamieniania Twojego domu w jungle!
                    Idealne również, jeżeli zaczyna brakować Ci miejsca
                    w domu i chcesz się pozbyć roślin, zarabiając!
                    </h2>
                </div>
            </Col>
            <Col lg={7}>
                <img src={header} />
            </Col>
        </Row>
    </header>
)
