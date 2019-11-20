import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import smoothScroll from 'smoothscroll-polyfill';
import { store } from './store/store';

// kick off the polyfill!
smoothScroll.polyfill();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

const rootElement = document.getElementById('root');
   
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(app, rootElement);
} else {
    ReactDOM.render(app, rootElement);
}

