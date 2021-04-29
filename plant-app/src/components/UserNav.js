import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import { getUserName } from "../utils";
import greenTea from "../images/greenTea.png";
import '../scss/main.scss';

export const UserNav = () => (
    <Navbar expand="lg" style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Navbar.Brand href="/"><div className="logo" href="/"><img src={greenTea} />PlantApp</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Strona główna</Nav.Link>
                <Nav.Link href="/user">Twoje konto</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user">{getUserName()}</NavDropdown.Item>
                    <NavDropdown.Item href="/buyplant">Kupuj</NavDropdown.Item>
                    <NavDropdown.Item href="/addplant">Sprzedaj</NavDropdown.Item>
                    <NavDropdown.Item href="/yourdata">Twoje dane</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Wyloguj</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)



