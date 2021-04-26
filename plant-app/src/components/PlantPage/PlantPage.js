import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../elements/UserNav/UserNav';
import { getPlantDetails, deleteBoughtPlant, addBoughtPlants } from "../API/constants";
import Card from 'react-bootstrap/Card';
import { ButtonComponent } from '../elements/Button/Button';


export const PlantPage = ({ id, logOut, goBack, buy }) => {

const [details, setDetails] = useState({plantName: '', price:'', height: '', userId: ''});
//const [bought, setBought] = useState([]);

useEffect(( ) => {
    getPlantDetails(id, setDetails);
}, []);

const buyPlant = () => {
    deleteBoughtPlant(id);
    addBoughtPlants(details);
}
   
    return (
        <>
            <Container>
            <UserNav
                logOut={logOut}
                goBack={goBack}
            />
                <Card>
            <Card.Title>{details.plantName}</Card.Title>
            <div>
              <Card.Text>Cena: {details.price}</Card.Text>
              <Card.Text>Wysokość: {details.height}</Card.Text>
              <Card.Text>Sprzedawca: {details.userId}</Card.Text>
            </div>
            </Card>
            <ButtonComponent
                    children="Kup"
                    className="buyButton"
                    onClick={()=> {
                        buyPlant();
                        buy();
                    }}
                >
                </ButtonComponent>
            </Container>
        </>
    )
}
