import React from 'react'

import { ButtonComponent } from '../Button/Button';
import { Header } from '../Header/Header';
import { TileSection } from '../TileSection/TileSection';
import { UserNav } from '../UserNav/UserNav';
import { UserCard } from '../UserCard/UserCard';

import '../../scss/main.scss';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CarouselSec } from '../CarouselSec/CarouselSec';
import { Footer } from '../Footer/Footer';

export const UserPage = ({logOut}) => {

    return (
        <Container fluid className="container">
            <UserNav logOut={logOut} />
            <UserCard/>
            <Footer/>
        </Container>
       
    )
};
