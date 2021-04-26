import React from 'react';
import { ButtonComponent } from '../Button/Button';
import Card from 'react-bootstrap/Card';
import '../../../scss/main.scss';

export const PlantCard = ({ plantName, price, onButtonMore }) => {

    return (
        <>
            <Card style={{marginBottom: "10px"}}>
                <Card.Body>
                    <Card.Title>
                        {plantName}
                    </Card.Title>
                    <Card.Text>
                        Cena: {price}
                    </Card.Text>
                    <ButtonComponent
                        children="Więcej..."
                        className="sellButton"
                        onClick={onButtonMore}
                    >
                    </ButtonComponent>
                </Card.Body>
            </Card>
        </>
    )
};
