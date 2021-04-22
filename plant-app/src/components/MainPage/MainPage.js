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
import { Header } from '../elements/Header/Header';
import { TileSection } from '../elements/TileSection/TileSection';
import { Nav } from '../elements/Nav/Nav';
import { Footer } from '../elements/Footer/Footer';
import '../../scss/main.scss';

export const MainPage = ({ handleLogIn }) => {

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
            <Container>
                <Nav onButtonClick={handleLogIn} buttonText={"Zaloguj"} />
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
