import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../elements/Searchbox/Searchbox';
import { PlantCard } from '../elements/PlantCard/PlantCard';
import { UserNav } from '../elements/UserNav/UserNav';
import { getForSellPlants } from "../API/constants";


export const BuyPlant = () => {
   
    return (
        <>
            <Container>
                <UserNav/>
                <Searchbox onSearchboxChange={filter} />
                <Row className="justify-content-md-center">
                    {plantsFiltered.map((item, index) => {
                        return (
                            <Col lg={4} md={6}>
                                <PlantCard
                                    plantName={item.plantName}
                                    price={item.price}
                                    height={item.height}
                                    //showMoreButton={}
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
