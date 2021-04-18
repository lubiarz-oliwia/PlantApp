import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Tile = ({title, description, iconName, colorTitle}) => {

    return (
            <div className="tile">
                <FontAwesomeIcon icon={iconName} className="iconTile"/>
                <h1 style={colorTitle}>{title}</h1>
                <p>{description}</p>
            </div>
    )
};
