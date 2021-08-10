import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Commissions = lazy(() => import('../pages/Commissions'));
const Payments = lazy(() => import('../pages/Payments'));
const Historic = lazy(() => import('../pages/Historic'));
const Publisher = lazy(() => import('../pages/Publisher'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/comissoes" component={Commissions} />
        <Route exact path="/pagamentos" component={Payments} />
        <Route exact path="/historico" component={Historic} />
        <Route exact path="/publisher" component={Publisher} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
