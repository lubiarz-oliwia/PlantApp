import React from 'react';
import { Nav } from '../elements/Nav/Nav';
import { Footer } from '../elements/Footer/Footer';
import Container from 'react-bootstrap/Container';
import '../../scss/main.scss';
import { LoginForm } from '../elements/LoginForm/LoginForm';

export const LoginPage = ({ goBack, onLoginFormSubmit }) => {

    return (
        <Container >
            <Nav
                onButtonClick={goBack}
                buttonText={"Wróć"}
            />
            <LoginForm onLoginFormSubmit={onLoginFormSubmit}/>
            <Footer />
        </Container>

    )
};
