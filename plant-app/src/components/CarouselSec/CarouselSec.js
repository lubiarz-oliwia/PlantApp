import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background4 from "../../images/background4.jpeg";
import background2 from "../../images/background2.jpeg";
import background3 from "../../images/background3.jpeg"

export const CarouselSec = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background4}
                    alt="Plants"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background2}
                    alt="Plants"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background3}
                    alt="Plants"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

