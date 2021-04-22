import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../Searchbox/Searchbox';
import { PlantCard } from '../PlantCard/PlantCard';

export const ForSellPage = ({ plantName, price, height }) => {
    const plantsForSell = [{
        plantName: "fiolek",
        price: "10zl",
        height: "20cm",
    },
    {
        plantName: "monstera",
        price: "20zl",
        height: "20cm",
    },
    {
        plantName: "fiolek",
        price: "5zl",
        height: "20cm",
    },
    {
        plantName: "fiolek",
        price: "20zl",
        height: "20cm",
    },
    {
        plantName: "fiolek",
        price: "20zl",
        height: "20cm",
    },
    {
        plantName: "fiolek",
        price: "20zl",
        height: "20cm",
    },
    {
        plantName: "fiolek",
        price: "20zl",
        height: "20cm",
    }

    ]
    const [plantsFiltered, setPlantsFiltered] = useState([]);

    const filter = (text) => {
        const myPostsFiltered = plantsForSell.filter((el) => el.plantName.includes(text) || el.price.includes(text));
        setPlantsFiltered(myPostsFiltered);
    }

    return (
        <>
            <Container>
                <Searchbox onSearchboxChange={filter} />
                <Row className="justify-content-md-center">
                    {plantsFiltered.map((item, index) => {
                        return (
                            <Col lg={4} md={6}>
                                <PlantCard
                                    plantName={item.plantName}
                                    price={item.price}
                                    height={item.height}
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
