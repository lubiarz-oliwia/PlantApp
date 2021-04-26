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
import { PlantPage } from './components/PlantPage/PlantPage';

function MyApp() {
  let history = useHistory();

  const logIn = () => {
    history.push('/login');
  }

  const logOut = () => {
    history.push('/');
  }

  const goBack = () => {
    history.goBack();
  }

  const logToUser = () => {
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

  const toDetails = (id) => {
    const input = {
      pathname: '/details',
      state: { id: id }
    };
    history.push(input);
  }

  return (
    <Switch>
      <Route exact path="/">
        <MainPage
          handleLogIn={logIn}
        />
      </Route>
      <Route exact path="/login">
        <LoginPage
          onLoginFormSubmit={logToUser}
          goBack={goBack}
        />
      </Route>
      <Route exact path="/user">
        <UserPage
          logOut={logOut}
          goBack={goBack}
          sellPlant={sellPlant}
          buyPlant={buyPlant}
          boughtPlant={boughtPlant}
        />
      </Route>
      <Route exact path="/addplant">
        <AddPage
          logOut={logOut}
          goBack={goBack}
        />
      </Route>
      <Route exact path="/buyplant">
        <ForSellPage 
        logOut={logOut}
        goBack={goBack}
        toDetails={toDetails}/>
      </Route>
      <Route exact path="/details">
        {({location}) => (
          <PlantPage id={location.state.id}
          logOut={logOut}
          goBack={goBack}
          buy={boughtPlant}
         />
        )}
      </Route>
      <Route exact path="/boughtplant">
        <BoughtPage 
        logOut={logOut}
        goBack={goBack}
        />
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
