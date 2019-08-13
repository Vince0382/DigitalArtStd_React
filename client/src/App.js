import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Page1 from './containers/Page1/Page1';

import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';


const App = ({ location, isMobile }) => {

    const main = () => (
      // <TransitionWrapper location={location}>
        
      // </TransitionWrapper>
      <Page1/>
    );

    // const terms = () => (
    //   <TransitionWrapper location={location}>
    //     <Terms isMobile={() => isMobile()}/>
    //   </TransitionWrapper>
    // );

    // const privacy = () => (
    //   <TransitionWrapper location={location}>
    //     <Privacy isMobile={() => isMobile()}/>
    //   </TransitionWrapper>
    // );


    let routes = (
      <Switch location={location}>
          <Route path='/' exact component={Page1} />
{/* 
          <Route path='/terms' component={terms} />
          <Route path='/privacy' component={privacy} /> */}
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

export default withRouter(App);
