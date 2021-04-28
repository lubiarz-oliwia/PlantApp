import React, { useEffect, useState } from 'react';
import { UserNav } from '../elements/UserNav/UserNav';
import { Footer } from '../elements/Footer/Footer';
import { TableWithPlant } from '../elements/TableWithPlant/TableWithPlant';
import { getSoldPlants } from "../API/sold";
import Container from 'react-bootstrap/Container';

export const SoldPage = ({ logOut, goBack, title }) => {
    const [soldPlants, setSoldPlants] = useState([]);

    useEffect(() => {
        getSoldPlants(setSoldPlants);
    }, []);

    return (
        <Container >
            <UserNav
                logOut={logOut}
                goBack={goBack}
            />
            <TableWithPlant
                plants={soldPlants}
                title={"Kupione przez"}
            />
            <Footer />
        </Container>

    )
};
