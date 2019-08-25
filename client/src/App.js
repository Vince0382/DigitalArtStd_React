import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import itLocaleData from "react-intl/locale-data/fr";
import translations from "./languages/locales";

import Layout from './hoc/Layout/Layout';
import Page1 from './containers/Page1/Page1';

import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';

addLocaleData(enLocaleData);
addLocaleData(itLocaleData);

const App = props => {

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
      <Switch location={props.location}>
          <Route path='/' exact component={Page1} />
{/* 
          <Route path='/terms' component={terms} />
          <Route path='/privacy' component={privacy} /> */}
          {/* <Redirect from='/#top' to='/' />
          <Redirect from='/blog/#top' to='/blog' /> */}
          {/* <Route path='/services' render={() => wrappedComponent(<Services />, location)} /> */}
      </Switch>
    );

    const locale = props.language;
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <Layout>
            {routes}
        </Layout>
      </IntlProvider>
    );
      
}

export default withRouter(App);
