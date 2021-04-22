import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../UserNav/UserNav';
import { Footer } from '../Footer/Footer';
import '../../scss/main.scss';
import { AddForm } from '../AddForm/AddForm';

export const AddPage = ({ handleAddPlant }) => {

    return (
        <>
            <Container>
                <UserNav />
                <AddForm handleAddPlant={handleAddPlant}/>
                <Footer />
            </Container>
        </>
    )
};
