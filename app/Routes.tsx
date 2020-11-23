/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './components/templates/App';
import HomePage from './components/templates/HomePage';
import LoginPage from './components/templates/LoginPage';
import SignUpPage from './components/templates/SignUpPage';
import FramePage from './components/templates/FramePage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(
    /* webpackChunkName: "CounterPage" */ './components/templates/CounterPage'
  )
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.FRAME} component={FramePage} />
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.SIGNUP} component={SignUpPage} />
      </Switch>
    </App>
  );
}
