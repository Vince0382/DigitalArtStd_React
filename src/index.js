import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import smoothScroll from 'smoothscroll-polyfill';
import { store } from './store/store';

import "./assets/css/bootstrap.min.css?raw";
import "./assets/css/paper-kit.css?raw";

// kick off the polyfill!
smoothScroll.polyfill();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);
   


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
