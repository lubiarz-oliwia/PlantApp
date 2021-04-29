import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../components/UserNav';
import { Footer } from '../components/Footer';
import { YourDetails } from '../components/YourDetails';

export const UserInfoPage = () => (
    <Container >
        <UserNav />
        <YourDetails />
        <Footer />
    </Container>
)

