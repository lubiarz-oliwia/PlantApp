import React from 'react'
import { ButtonComponent } from '../Button/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../scss/main.scss';
import greenTea from "../../../images/greenTea.png";

export const UserNav = ({ logOut, goBack }) => {

    const getUserName = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return user.username;
        }
        return '';
    }
    
    return (
        <Row className="justify-content-between" style={{marginTop:"20px", marginBottom:"20px"}}>
            <Col
                lg={8}
                md={4}
                sm={2}
            >
                <a className="logo" href="/"><img src={greenTea}/>PlantApp</a>
            </Col>
            <Col
                 lg={{ span: 1, offset: 1 }}
                 md={{ span: 1, offset: 1 }}
                 sm={{ span: 1, offset: 1 }}
            >
               <ButtonComponent
                    children="Wróć"
                    className="submitButton"
                    onClick={goBack}
                >
                </ButtonComponent>
            </Col>
            <Col
                lg={{ span: 1, offset: 1 }}
                md={{ span: 1, offset: 1 }}
                sm={{ span: 1, offset: 1 }}
            >
               <ButtonComponent
                    children="Wyloguj"
                    className="logoutButton"
                    onClick={logOut}
                >
                </ButtonComponent>
            </Col>
            <Col>
               <p>Witaj {getUserName()}</p>
            </Col>
        </Row>
    )
};


