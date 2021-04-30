import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../components/UserNav';
import { Footer } from '../components/Footer';
import { addPlantForSell } from "../actions/forSell";
import { AddForm } from "../components/AddForm";
import { getUserName } from '../utils';
import '../scss/main.scss';

export const AddPage = ({ redirectToAllPlants }) => {
    const userId = { userId: getUserName() };

    const addPlant = (values) => {
        const data = { ...values, ...userId };
        addPlantForSell(data).then(() => {
            redirectToAllPlants();
        });
    };

    return (
        <Container>
            <UserNav />
            <AddForm handleAddPlant={addPlant} />
            <Footer />
        </Container>
    )
};
