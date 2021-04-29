import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { UserNav } from '../components/UserNav';
import { getPlantDetails, deleteBoughtPlant } from "../actions/forSell";
import { addBoughtPlants } from "../actions/bought";
import { ButtonComponent } from '../components/Button';
import { getUserName } from "../utils";
import '../scss/main.scss';

export const PlantPage = ({ id, buy }) => {
    const [details, setDetails] = useState({ plantName: '', price: '', height: '', userId: '' });

    useEffect(() => {
        getPlantDetails(id, setDetails);
    }, []);

    const buyPlant = () => {
        deleteBoughtPlant(id);
        addBoughtPlants(details);
        buy();
    }

    const belongsToLoggedUser = () => {
        const login = getUserName();
        if (login === details.userId) {
            return true;
        }
        return false;
    }

    return (
        <Container>
            <UserNav />
            <Card className="cardStyle">
                <Card.Title>{details.plantName}</Card.Title>
                <div>
                    <Card.Text>Cena: {details.price} zł</Card.Text>
                    <Card.Text>Wysokość: {details.height} cm</Card.Text>
                    <Card.Text>Sprzedawca: {details.userId}</Card.Text>
                </div>
            </Card>
            {belongsToLoggedUser() ? null : (
                <div className="center"
                >
                    <ButtonComponent
                        children="Kup"
                        className="buyButton"
                        onClick={buyPlant}
                    >
                    </ButtonComponent>
                </div>)}
        </Container>
    )
}

