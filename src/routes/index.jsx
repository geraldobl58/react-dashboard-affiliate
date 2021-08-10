import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Commissions = lazy(() => import('../pages/Commissions'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/comissoes" component={Commissions} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
