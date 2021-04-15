import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import greenTea from "../../images/greenTea.png";

import '../../scss/main.scss';

export const Footer = ({ title, description, iconName, colorStyle }) => {

    return (
        <footer>
            <div>
                <p><img src={greenTea} />PlantApp</p>
            </div>
            <div>
                <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /> </a>
                <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /> </a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </div>
        </footer>
    )
};
