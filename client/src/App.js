import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';
import Blog from './containers/Blog/Blog';
import classes from './App.css';

const app = ({ location }) => {

    const main = () => (
      <TransitionWrapper location={location}>
        <Home />
      </TransitionWrapper>
    );

    const blog = () => (
      <TransitionWrapper location={location}>
        <Blog />
      </TransitionWrapper>
    );


    let routes = (
      <Switch location={location}>
          <Route path='/' exact component={main} >
          
          </Route>
          <Route path='/blog' component={blog} />
          {/* <Redirect from='/#top' to='/' />
          <Redirect from='/blog/#top' to='/blog' /> */}
          {/* <Route path='/services' render={() => wrappedComponent(<Services />, location)} /> */}
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
