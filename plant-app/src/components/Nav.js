import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { ButtonComponent } from './Button';
import greenTea from "../images/greenTea.png";
import '../scss/main.scss';

export const Navigation = ({ onButtonClick, buttonText }) => (
    <Navbar className="justify-content-between" expand="lg" style={{ marginBottom: "20px", marginTop: "20px" }} >
        <Navbar.Brand href="/">
            <div className="logo" href="/"><img src={greenTea} />
         PlantApp
         </div>
        </Navbar.Brand>
        <ButtonComponent
            children={buttonText}
            onClick={onButtonClick}
        >
        </ButtonComponent>
    </Navbar>
)

