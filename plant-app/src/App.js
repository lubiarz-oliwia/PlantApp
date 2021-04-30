import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MainPage } from './containers/MainPage';
import { UserPage } from './containers/UserPage';
import { AddPage } from './containers/AddPage';
import { ForSellPage } from './containers/ForSellPage';
import { LoginPage } from './containers/LoginPage';
import { BoughtPage } from './containers/BoughtPage';
import { PlantPage } from './containers/PlantPage';
import { SoldPage } from './containers/SoldPage';
import { UserInfoPage } from "./containers/UserInfoPage";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

function MyApp() {
  let history = useHistory();

  const logIn = () => {
    history.push('/login');
  }

  const goBack = () => {
    history.goBack();
  }

  const onLoginFormSubmit = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    history.push('/user');
  }

  const redirectToSellPlant = () => {
    history.push('/addplant');
  }

  const redirectToBuyPlant = () => {
    history.push('/buyplant');
  }

  const redirectToBoughtPlant = () => {
    history.push('/boughtplant');
  }

  const redirectToUserData = () => {
    history.push('/yourdata');
  }

  const redirectToSoldPlants = () => {
    history.push('/soldplants');
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
          onLoginFormSubmit={onLoginFormSubmit}
          goBack={goBack}
        />
      </Route>
      <Route exact path="/user">
        <UserPage
          redirectToSellPlant={redirectToSellPlant}
          redirectToBuyPlant={redirectToBuyPlant}
          redirectToBoughtPlant={redirectToBoughtPlant}
          redirectToSoldPlants={redirectToSoldPlants}
          redirectToUserData={redirectToUserData}
        />
      </Route>
      <Route exact path="/addplant">
        <AddPage
          redirectToAllPlants={redirectToBuyPlant}
        />
      </Route>
      <Route exact path="/buyplant">
        <ForSellPage
          toDetails={toDetails} />
      </Route>
      <Route exact path="/details">
        {({ location }) => (
          <PlantPage id={location.state.id}
          redirectToBoughtPlant={redirectToBoughtPlant}
          />
        )}
      </Route>
      <Route exact path="/boughtplant">
        <BoughtPage />
      </Route>
      <Route exact path="/yourData">
        <UserInfoPage />
      </Route>
      <Route exact path="/soldplants">
        <SoldPage />
      </Route>
    </Switch>
  );
}

const App = () => (
  <Router>
    <MyApp />
  </Router>
)

export default App;
