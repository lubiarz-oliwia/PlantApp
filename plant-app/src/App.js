import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage';
import { UserPage } from './components/UserPage/UserPage';
import { AddPage } from './components/AddPage/AddPage';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { ForSellPage } from './components/ForSellPage/ForSellPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { BoughtPage } from './components/BoughtPage/BoughtPage';

function MyApp() {
  let history = useHistory();

  const logIn = () => {
    history.push('/login');
  }

  const logOut = () => {
    history.push('/');
  }

  const logToUser = () => {
    history.push('/user');
  }

  const toMain = () => {
    history.push('/');
  }

  const toUserPage = () => {
    history.push('/user');
  }

  const sellPlant = () => {
    history.push('/addplant');
  }

  const buyPlant = () => {
    history.push('/buyplant');
  }

  const boughtPlant = () => {
    history.push('/boughtplant');
  }

  return (
    <Switch>
      <Route exact path="/">
        <MainPage 
        handleLogIn={logIn} 
        />
      </Route>
      <Route exact path="/login">
        <Container>
          <Row>
            <Col lg={12}>
              <LoginPage 
                onLoginFormSubmit={logToUser} 
                goBack={toMain}
              />
            </Col>
          </Row>
        </Container>
      </Route>
      <Route exact path="/user">
        <UserPage 
          logOut={logOut} 
          goBack={toMain}
          sellPlant={sellPlant} 
          buyPlant={buyPlant}
          boughtPlant={boughtPlant}
        />
      </Route>
      <Route exact path="/addplant">
        <AddPage 
        logOut = {logOut}
        goBack = {toUserPage}
        />
      </Route>
      <Route exact path="/buyplant">
        <ForSellPage />
      </Route>
      <Route exact path="/boughtplant">
        <BoughtPage />
      </Route>
    </Switch>
  );
}

const MyAppWrapped = withRouter(MyApp);

const App = () => (
  <Router>
    <MyAppWrapped />
  </Router>
)

export default App;
