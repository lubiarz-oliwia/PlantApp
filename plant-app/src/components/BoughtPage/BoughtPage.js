import React, {useEffect, useState} from 'react';
import { UserNav } from '../elements/UserNav/UserNav';
import { UserCard } from '../elements/UserCard/UserCard';
import { Footer } from '../elements/Footer/Footer';
import { TableWithPlant } from '../elements/TableWithPlant/TableWithPlant';
import { getBoughtPlants } from "../API/constants";

import Container from 'react-bootstrap/Container';


export const BoughtPage = ({ logOut, goBack }) => {
    const [boughtPlants, setBoughtPlants] = useState([]);

    useEffect(() => {
        getBoughtPlants(setBoughtPlants);
    }, []);

    return (
        <Container >
           <UserNav
                logOut={logOut}
                goBack={goBack}
            />
             <TableWithPlant
                                    boughtPlants={boughtPlants}
                                />
                    
            <Footer />
        </Container>

    )
};
