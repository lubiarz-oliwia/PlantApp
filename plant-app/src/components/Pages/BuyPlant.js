import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../elements/Searchbox/Searchbox';
import { PlantCard } from '../elements/PlantCard/PlantCard';
import { UserNav } from '../elements/UserNav/UserNav';

export const BuyPlant = ({toDetails}) => {
   
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
                                    showMoreButton={toDetails}
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
