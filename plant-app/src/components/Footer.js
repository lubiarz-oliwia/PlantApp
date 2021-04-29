import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import '../scss/main.scss';

export const Footer = () => (
    <footer>
        <Row className="justify-content-center">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /> </a>
            <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /> </a>
            <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        </Row>
    </footer>
)



