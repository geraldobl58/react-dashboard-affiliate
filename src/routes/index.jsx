import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';

const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
