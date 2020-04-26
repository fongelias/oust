import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from 'components/containers/LandingPage/LandingPage';

import './App.scss';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/*" component={LandingPage}/>
    </Switch>
  </Router>
)
