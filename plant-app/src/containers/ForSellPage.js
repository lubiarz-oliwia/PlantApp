import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../components/Searchbox';
import { PlantCard } from '../components/PlantCard';
import { UserNav } from '../components/UserNav';
import { getForSellPlants } from "../actions/forSell";

export const ForSellPage = ({ toDetails }) => {
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
        let myPlantsFiltered = plantsForSell;
        console.log(text);
        if (text) {
            myPlantsFiltered = plantsForSell.filter((el) => {
                if (el.plantName && el.price)
                    return el.plantName.includes(text) || el.price.includes(text);
                return false;
            });
        }
        setPlantsFiltered(myPlantsFiltered);
    }

    return (
        <Container>
            <UserNav />
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
    )
}
