import React from 'react';
import { 
    faCreditCard, 
    faEnvelope, 
    faPiggyBank, 
    faSearch, 
    faShoppingBasket, 
    faSprayCan 
    } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import { Header } from '../Header/Header';
import { TileSection } from '../TileSection/TileSection';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import '../../scss/main.scss';

export const MainPage = ({handleLoingForm}) => {

    const dataSell = [{
        title: 'Dodawaj bez opłat',
        description: 'To super proste!',
        iconName: faPiggyBank,
    },
    {
        title: 'Sprzedaj, wyślij',
        description: 'Daj radość innym!',
        iconName: faEnvelope,
    },
    {
        title: 'Zarabiaj!',
        description: 'Ciesz się gotówką.',
        iconName: faCreditCard,
    },
    ];

    const dataBuy = [{
        title: 'Znajdź!',
        description: 'To super proste!',
        iconName: faSearch,
    },
    {
        title: 'Kup, czekaj!',
        description: 'Daj radość innym!',
        iconName: faShoppingBasket,
    },
    {
        title: 'Dbaj!',
        description: 'Ciesz się gotówką.',
        iconName: faSprayCan,
    },
    ];

    return (
        <>
            <Container fluid className="container">
                <Nav logIn={handleLoingForm}/>
                <Header />
                <TileSection 
                    data={dataSell} 
                    header={"Sprzedawaj!"} 
                    buttonText={"Sprzedaj!"} 
                    buttonClassName={"sellButton"} 
                />
                <TileSection 
                    data={dataBuy} 
                    header={"Kupuj!"} 
                    buttonText={"Kupuj!"} 
                    buttonClassName={"buyButton"} 
                />
                <Footer />
            </Container>
        </>
    )
};
