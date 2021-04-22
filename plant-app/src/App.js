import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage';
import { LoginForm } from './components/LoginForm/LoginForm';
import { UserPage } from './components/UserPage/UserPage';
import { AddPage } from './components/AddPage/AddPage';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { ForSellPage } from './components/ForSellPage/ForSellPage';

function MyApp() {
  let history = useHistory();

  const logIn = () => {
    history.push('/login');
  }

  const onLoginFormSubmit = () => {
    history.push('/user');
  }

  const logOut = () => {
    history.push('/');
  }

  const sellPlant = () => {
    history.push('/addplant');
  }

  const buyPlant = () => {
    history.push('/buyplant');
  }

  return (
    <Switch>
      <Route exact path="/">
        <MainPage 
        handleLoingForm={logIn} 
        />
      </Route>
      <Route exact path="/login">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <LoginForm 
                onLoginFormSubmit={onLoginFormSubmit} 
              />
            </Col>
          </Row>
        </Container>
      </Route>
      <Route exact path="/user">
        <UserPage 
          logOut={logOut} 
          sellPlant={sellPlant} 
          buyPlant={buyPlant}
        />
      </Route>
      <Route exact path="/addplant">
        <AddPage />
      </Route>
      <Route exact path="/buyplant">
        <ForSellPage />
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
