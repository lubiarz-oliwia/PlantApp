import React from 'react';
import { Nav } from '../elements/Nav/Nav';
import { Footer } from '../elements/Footer/Footer';
import Container from 'react-bootstrap/Container';
import '../../scss/main.scss';
import { LoginForm } from '../elements/LoginForm/LoginForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const LoginPage = ({ goBack, onLoginFormSubmit }) => {

    return (
        <Container>
          <Row>
            <Col lg={12}>
            <Nav
                onButtonClick={goBack}
                buttonText={"Wróć"}
            />
            <LoginForm onLoginFormSubmit={onLoginFormSubmit}/>
            <Footer />
            </Col>
          </Row>
        </Container>
    )
};
