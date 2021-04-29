import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { UserNav } from '../components/UserNav';
import { Footer } from '../components/Footer';
import { TableWithPlant } from '../components/TableWithPlant';
import { getSoldPlants } from "../actions/sold";

export const SoldPage = () => {
    const [soldPlants, setSoldPlants] = useState([]);

    useEffect(() => {
        getSoldPlants(setSoldPlants);
    }, []);

    return (
        <Container >
            <UserNav />
            <TableWithPlant
                plants={soldPlants}
                title={"Kupione przez"}
            />
            <Footer />
        </Container>
    )
};
