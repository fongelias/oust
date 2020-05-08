import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from 'components/containers/LandingPage/LandingPage';
import { GamePage, GAME_PAGE_PATH } from 'components/containers/GamePage/GamePage';
import { JoinGamePage, JOIN_GAME_PAGE_PATH } from 'components/containers/JoinGamePage/JoinGamePage';

import './App.scss';

export const App = () => (
  <Router>
    <Switch>
      <Route path={GAME_PAGE_PATH} component={GamePage}/>
      <Route path={JOIN_GAME_PAGE_PATH} component={JoinGamePage}/>
      <Route path="/*" component={LandingPage}/>
    </Switch>
  </Router>
)
