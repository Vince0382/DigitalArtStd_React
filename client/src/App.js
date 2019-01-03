import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {withGetScreen} from 'react-getscreen';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Blog from './containers/Blog/Blog';
import Terms from './containers/Terms/Terms';
import Privacy from './containers/Privacy/Privacy';

import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';


const App = ({ location, isMobile }) => {

    const main = () => (
      <TransitionWrapper location={location}>
        <Home isMobile={() => isMobile()}/>
      </TransitionWrapper>
    );

    const blog = () => (
      <TransitionWrapper location={location}>
        <Blog isMobile={() => isMobile()}/>
      </TransitionWrapper>
    );

    const terms = () => (
      <TransitionWrapper location={location}>
        <Terms isMobile={() => isMobile()}/>
      </TransitionWrapper>
    );

    const privacy = () => (
      <TransitionWrapper location={location}>
        <Privacy isMobile={() => isMobile()}/>
      </TransitionWrapper>
    );


    let routes = (
      <Switch location={location}>
          <Route path='/' exact component={main} />
          
          <Route path='/blog' component={blog} />
          <Route path='/terms' component={terms} />
          <Route path='/privacy' component={privacy} />
          {/* <Redirect from='/#top' to='/' />
          <Redirect from='/blog/#top' to='/blog' /> */}
          {/* <Route path='/services' render={() => wrappedComponent(<Services />, location)} /> */}
      </Switch>
    );

    return (
      <div>
        <Layout isMobile={isMobile}>
            {routes}
        </Layout>
      </div>
    );
      
}


const options = {mobileLimit: 749}
export default withRouter(withGetScreen(App,options));
