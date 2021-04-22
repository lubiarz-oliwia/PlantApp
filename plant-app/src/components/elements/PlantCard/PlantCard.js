import React from 'react';
import { ButtonComponent } from '../Button/Button';
import Card from 'react-bootstrap/Card';
import '../../../scss/main.scss';

export const PlantCard = ({ plantName, price, height }) => {

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {plantName}
                    </Card.Title>
                    <Card.Text>
                        Cena: {price}
                    </Card.Text>
                    <Card.Text>
                        Wielkość: {height}
                    </Card.Text>
                    <ButtonComponent
                        children="Więcej..."
                        className="sellButton"
                    >
                    </ButtonComponent>
                </Card.Body>
            </Card>
        </>
    )
};
