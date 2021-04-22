import React from 'react';
import { UserNav } from '../elements/UserNav/UserNav';
import { UserCard } from '../elements/UserCard/UserCard';
import { Footer } from '../elements/Footer/Footer';
import { TableWithPlant } from '../elements/TableWithPlant/TableWithPlant';

import Container from 'react-bootstrap/Container';

export const BoughtPage = ({ logOut, sellPlant, buyPlant, goBack }) => {

    return (
        <Container >
            <UserNav
                logOut={logOut}
                goBack={goBack}
            />
            <TableWithPlant />
            <Footer />
        </Container>

    )
};
