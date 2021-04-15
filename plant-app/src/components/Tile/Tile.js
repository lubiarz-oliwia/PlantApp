import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Tile = ({title, description, iconName}) => {

    return (
            <div className="tile">
                <FontAwesomeIcon icon={iconName}/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
    )
};
