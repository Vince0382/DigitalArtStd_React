import React, { Suspense } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import frLocaleData from "react-intl/locale-data/fr";
import itLocaleData from "react-intl/locale-data/it";
import translations from "./languages/locales";

import ScrollToTop from './hoc/ScrollToTop';
import Layout from './hoc/Layout/Layout';
import Page1 from './containers/Page1/Page1';

import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';
import Service from './containers/Page1/Services/Service/Service';
// import Web from './containers/Page1/Services/Service/Web/Web';
// import Mobile from './containers/Page1/Services/Service/Mobile/Mobile';


addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
addLocaleData(itLocaleData);

const Web = React.lazy(() => {
  return import('./containers/Page1/Services/Service/Web/Web');
});

const Mobile = React.lazy(() => {
  return import('./containers/Page1/Services/Service/Mobile/Mobile');
});

const App = props => {

    const routes = (
      <Switch location={props.location}>
          <Route path='/' exact component={Page1} />
          <Route path='/web' render={props => <Service {...props}><Web /></Service>} />
          <Route path='/mobile' render={props => <Service {...props}><Mobile /></Service>} />
          <Redirect to="/" />
      </Switch>
    );

    const wrapper = (
      <Layout>
        <TransitionWrapper location={props.location}>
          <Suspense fallback={<Loader active />}>
            {routes}
          </Suspense>
        </TransitionWrapper>
      </Layout>
    );

    const locale = props.language;
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <ScrollToTop>
          {wrapper}
        </ScrollToTop>
      </IntlProvider>
    );
      
}

const mapStateToprops = state => {
  return {
    language: state.main.language
  }
}

export default connect( mapStateToprops )( withRouter( App ));
