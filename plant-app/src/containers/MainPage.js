import React from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import '../scss/main.scss';

export const MainPage = ({ handleLogIn }) => (
    <Container>
        <Nav onButtonClick={handleLogIn} buttonText={"Zaloguj"} />
        <Header />
        <Footer />
    </Container>
)

