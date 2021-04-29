import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../components/UserNav';
import { UserCard } from '../components/UserCard';
import { Footer } from '../components/Footer';
import '../scss/main.scss';

export const UserPage = ({ redirectToSellPlant, redirectToBuyPlant, redirectToBoughtPlant, redirectToUserData, redirectToSoldPlants }) => (
    <Container >
        <UserNav />
        <UserCard
            redirectToSellPlant={redirectToSellPlant}
            redirectToBuyPlant={redirectToBuyPlant}
            redirectToBoughtPlant={redirectToBoughtPlant}
            redirectToUserData={redirectToUserData}
            redirectToSoldPlants={redirectToSoldPlants}
        />
        <Footer />
    </Container>
)
