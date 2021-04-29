import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Searchbox } from '../components/Searchbox';
import { PlantCard } from '../components/PlantCard';
import { UserNav } from '../components/UserNav';

export const BuyPlant = ({ toDetails }) => (
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
                            height={item.height}
                            showMoreButton={toDetails}
                        />
                    </Col>
                )
            })
            }
        </Row>
    </Container>
)
