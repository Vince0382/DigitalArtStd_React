import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import asyncComponent from './hoc/asyncComponent';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';
import classes from './App.css';


const wrappedComponent = (component, location) => {
  return (
    <TransitionWrapper location={location}>{component}</TransitionWrapper>
  );
}

const app = ({ location }) => {

    let routes = (
      <Switch location={location}>
          <Route path='/' exact render={() => wrappedComponent(<Home />, location)} />
          <Route path='/services' render={() => wrappedComponent(<Services />, location)} />
          <Redirect to='/' />
      </Switch>
    );

    return (
      <div>
        <Layout>
            {routes}
        </Layout>
      </div>
    );
}

export default withRouter(app);
