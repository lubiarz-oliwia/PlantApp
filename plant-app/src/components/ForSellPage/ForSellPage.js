import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../elements/Searchbox/Searchbox';
import { PlantCard } from '../elements/PlantCard/PlantCard';
import { UserNav } from '../elements/UserNav/UserNav';
import { getForSellPlants } from "../API/constants";

// const plantsForSell = [{
//     plantName: "fiolek",
//     price: "10zl",
//     height: "20cm",
// },
// {
//     plantName: "monstera",
//     price: "20zl",
//     height: "20cm",
// },
// {
//     plantName: "fiolek",
//     price: "5zl",
//     height: "20cm",
// },
// {
//     plantName: "fiolek",
//     price: "20zl",
//     height: "20cm",
// },
// {
//     plantName: "fiolek",
//     price: "20zl",
//     height: "20cm",
// },
// {
//     plantName: "fiolek",
//     price: "20zl",
//     height: "20cm",
// },
// {
//     plantName: "fiolek",
//     price: "20zl",
//     height: "20cm",
// }

// ]

export const ForSellPage = ({ toDetails, logOut, goBack }) => {
    const [plantsForSell, setPlantsForSell] = useState([]);
    const [plantsFiltered, setPlantsFiltered] = useState([]);

    const wrapperfunc = (allPlants) => {
        setPlantsForSell(allPlants);
        setPlantsFiltered(allPlants);
    }

    useEffect(() => {
        getForSellPlants(wrapperfunc);
        console.log(wrapperfunc);
    }, []);

    const filter = (text) => {
        const myPlantsFiltered = plantsForSell.filter((el) => el.plantName.includes(text) || el.price.includes(text));
        setPlantsFiltered(myPlantsFiltered);
    }

    console.log(plantsFiltered);

    return (
        <>
            <Container>
            <UserNav
                logOut={logOut}
                goBack={goBack}
            />
                <Searchbox onSearchboxChange={filter} />
                <Row className="justify-content-md-center">
                    {plantsFiltered.map((item, index) => {
                        return (
                            <Col lg={4} md={6}>
                                <PlantCard
                                    plantName={item.plantName}
                                    price={item.price}
                                    onButtonMore={() => toDetails(item.id)}
                                />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </>
    )
}
