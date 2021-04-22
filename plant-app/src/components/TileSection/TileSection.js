import React from 'react';
import { ButtonComponent } from '../Button/Button';
import { Tile } from "../Tile/Tile";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const TileSection = ({ data, header, buttonText, buttonClassName }) => {

    return (
        <section className="tileSection">
        <Row className="justify-content-center">
            <h1>{header}</h1>
        </Row>
            <Row className="justify-content-center">
                {
                    data.map(({ title, description, iconName }) => {
                        return (
                            <Col lg={4} >
                            <Tile
                                title={title}
                                description={description}
                                iconName={iconName}
                            >
                            </Tile>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="justify-content-center">
            <ButtonComponent
                children={buttonText}
                className={buttonClassName}
            >
            </ButtonComponent>
            </Row>  
        </section>
    )
};
