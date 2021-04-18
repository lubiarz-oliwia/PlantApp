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
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

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

  return (
    <Switch>
        <Route exact path="/">
              <MainPage handleLoingForm={logIn}/> 
        </Route>
        <Route exact path="/login">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <LoginForm onLoginFormSubmit={onLoginFormSubmit} />
              </Col>
              </Row>
          </Container>
        </Route>
        <Route exact path="/user">
              <UserPage logOut={logOut} /> 
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
