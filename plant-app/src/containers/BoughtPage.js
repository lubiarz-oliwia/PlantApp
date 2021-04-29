import React, { useEffect, useState } from 'react';
import { UserNav } from '../components/UserNav';
import { Footer } from '../components/Footer';
import { TableWithPlant } from '../components/TableWithPlant';
import { getBoughtPlants } from "../actions/bought";
import Container from 'react-bootstrap/Container';

export const BoughtPage = () => {
    const [boughtPlants, setBoughtPlants] = useState([]);

    useEffect(() => {
        getBoughtPlants(setBoughtPlants);
    }, []);

    return (
        <Container >
            <UserNav
            />
            <TableWithPlant
                plants={boughtPlants}
                title={"Sprzedawca"}
            />
            <Footer />
        </Container>

    )
};
