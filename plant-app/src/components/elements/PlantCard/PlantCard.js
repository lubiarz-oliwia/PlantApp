import React from 'react';
import { ButtonComponent } from '../Button/Button';
import Card from 'react-bootstrap/Card';
import '../../../scss/main.scss';

export const PlantCard = ({ plantName, price, showMoreButton }) => {

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
                        onClick={showMoreButton}
                    >
                    </ButtonComponent>
                </Card.Body>
            </Card>
        </>
    )
};
