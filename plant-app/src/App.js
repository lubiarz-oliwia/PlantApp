import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { MainPage } from './components/Pages/MainPage';
import { UserPage } from './components/Pages/UserPage';
import { AddPage } from './components/Pages/AddPage';
import { ForSellPage } from './components/Pages/ForSellPage';
import { LoginPage } from './components/Pages/LoginPage';
import { BoughtPage } from './components/Pages/BoughtPage';
import { PlantPage } from './components/Pages/PlantPage';
import { SoldPage } from './components/Pages/SoldPage';

import {YourDetails} from "./components/elements/YourDetails"
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

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

  const onLoginFormSubmit = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
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

  const yourData = () => {
    history.push('/yourdata');
  }

  const soldPlants = () => {
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
          logOut={logOut}
          goBack={goBack}
          sellPlant={sellPlant}
          buyPlant={buyPlant}
          boughtPlant={boughtPlant}
          soldPlants={soldPlants}
          yourData={yourData}
        />
      </Route>
      <Route exact path="/addplant">
        <AddPage
          logOut={logOut}
          goBack={goBack}
          sellPlant={buyPlant}
        />
      </Route>
      <Route exact path="/buyplant">
        <ForSellPage
          logOut={logOut}
          goBack={goBack}
          toDetails={toDetails} />
      </Route>
      <Route exact path="/details">
        {({ location }) => (
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
      <Route exact path="/yourData">
        <YourDetails/>
      </Route>
      <Route exact path="/soldplants">
        <SoldPage
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
