import React from 'react';
import { UserNav } from '../elements/UserNav/UserNav';
import { UserCard } from '../elements/UserCard/UserCard';
import { Footer } from '../elements/Footer/Footer';
import Container from 'react-bootstrap/Container';
import '../../scss/main.scss';

export const UserPage = ({ logOut, sellPlant, buyPlant, boughtPlant, goBack }) => {

    return (
        <Container >
            <UserNav
                logOut={logOut}
                goBack={goBack}
            />
            <UserCard
                sellPlant={sellPlant}
                buyPlant={buyPlant}
                boughtPlant={boughtPlant}
            />
            <Footer />
        </Container>

    )
};
