import React from 'react';
import Card from 'react-bootstrap/Card';
import { ButtonComponent } from './Button';
import '../scss/main.scss';

export const PlantCard = ({ plantName, price, onButtonMore }) => (
    <Card className="cardStyle" style={{ marginBottom: "10px" }}>
        <Card.Body>
            <Card.Title>
                {plantName}
            </Card.Title>
            <Card.Text>
                Cena: {price} zł
                    </Card.Text>
            <div className="center">
                <ButtonComponent
                    children="Więcej..."
                    className="sellButton"
                    onClick={onButtonMore}
                >
                </ButtonComponent>
            </div>
        </Card.Body>
    </Card>
)

