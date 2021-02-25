import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import MapContainer from '../MapPage/index';
import FoodMenuLink from '../FoodMenuLink/FoodMenuLink';
import FoodMenuPage from '../FoodMenuPage';
import Search from '../SearchPage/container/SearchPage.container';
import './style.scss';

const Home = ()=> {
    return (
        <Router>
          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/food-menu">
              <FoodMenuPage />
            </Route>
            <Route path="/">
              <Search />
              <FoodMenuLink />
            </Route>
          </Switch>
      </Router>
    )
}

export default Home;