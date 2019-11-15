import React, { Suspense } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import frLocaleData from "react-intl/locale-data/fr";
import itLocaleData from "react-intl/locale-data/it";
import translations from "./languages/locales";

import ScrollToTop from './hoc/ScrollToTop';
import Layout from './hoc/Layout/Layout';
import Page1 from './containers/Page1/Page1';

import TransitionWrapper from './hoc/TransitionWrapper/TransitionWrapper';
import ServiceWrapper from './containers/Page1/Services/Service/ServiceWrapper/ServiceWrapper';
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

const ProjectDetailed = React.lazy(() => {
  return import('./containers/Page1/Portfolio/Project/ProjectSkin/ProjectSkin');
});

const App = props => {

    const routes = (
      <Switch location={props.location}>
          <Route path='/' exact component={Page1} />
          <Route path='/web' render={props => <ServiceWrapper {...props}><Web /></ServiceWrapper>} />
          <Route path='/mobile' render={props => <ServiceWrapper {...props}><Mobile /></ServiceWrapper>} />
          <Route path='/projectDetailed' render={props => props.history.location.state ? <ProjectDetailed {...props} /> : <Redirect to="/" />} />
          <Redirect to="/" />
      </Switch>
    );

    const wrapper = (
      <Layout>
        <TransitionWrapper location={props.location}>
          <Suspense fallback={<Spinner style={{ width: '25rem', height: '25rem' }} type="grow" />}>
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

export default withRouter( connect( mapStateToprops )( App ));
