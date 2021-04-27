import React from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../elements/UserNav/UserNav';
import { Footer } from '../elements/Footer/Footer';
import { addPlantForSell } from "../API/forSell";
import '../../scss/main.scss';
import { AddForm } from "../elements/AddForm/AddForm";

export const AddPage = ({ sellPlant, logOut, goBack }) => {

    const getUserName = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return user.username;
        }
        return '';
    }
    const userId = {userId: getUserName()}

    console.log(userId)
    const addPlant = (values) => {
        console.log(values);
        const data = {...values, ...userId}
        console.log(data);
        addPlantForSell(data);
        sellPlant();
    }

    return (
        <>
            <Container>
                <UserNav logOut={logOut} goBack={goBack} />
                <AddForm handleAddPlant={addPlant}/>
                <Footer />
            </Container>
        </>
    )
};
