import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../elements/UserNav/UserNav';
import { Footer } from '../elements/Footer/Footer';
import '../../scss/main.scss';
import { AddForm } from '../AddForm/AddForm';

export const AddPage = ({ handleAddPlant, logOut, goBack }) => {

    return (
        <>
            <Container>
                <UserNav logOut={logOut} goBack={goBack} />
                <AddForm handleAddPlant={handleAddPlant}/>
                <Footer />
            </Container>
        </>
    )
};
