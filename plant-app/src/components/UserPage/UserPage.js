import React from 'react';
import { UserNav } from '../UserNav/UserNav';
import { UserCard } from '../UserCard/UserCard';
import { Footer } from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import '../../scss/main.scss';

export const UserPage = ({ logOut, sellPlant, buyPlant }) => {

    return (
        <Container >
            <UserNav
                logOut={logOut}
            />
            <UserCard
                sellPlant={sellPlant}
                buyPlant={buyPlant}
            />
            <Footer />
        </Container>

    )
};
