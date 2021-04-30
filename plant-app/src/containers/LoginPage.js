import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LoginForm } from '../components/LoginForm';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/Footer';
import '../scss/main.scss';

export const LoginPage = ({ goBack, onLoginFormSubmit }) => (
  <Container className="container-fluid">
    <Navigation
      onButtonClick={goBack}
      buttonText={"Wróć"}
    />
    <Row>
      <Col>
        <LoginForm onLoginFormSubmit={onLoginFormSubmit} />
        <Footer />
      </Col>
    </Row>
  </Container>
);
