import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';

export const Tile = ({ title, description, iconName, colorTitle }) => {

    return (
        <div className="tile">
            <Row className="justify-content-center">
                <FontAwesomeIcon
                    icon={iconName}
                    className="iconTile"
                />
            </Row>
            <Row className="justify-content-center">
                <h1 style={colorTitle}>
                    {title}
                </h1>
            </Row>
            <Row className="justify-content-center">
                <p>
                    {description}
                </p>
            </Row>
        </div>
    )
};
