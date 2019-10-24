import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'babel-polyfill';
import smoothScroll from 'smoothscroll-polyfill';
import { store } from './store/store';

import "./assets/css/bootstrap.min.css?raw";
import "./assets/css/paper-kit.css?raw";
import "./assets/demo/demo.css?raw";
import "./assets/demo/react-demo.css?raw";

// kick off the polyfill!
smoothScroll.polyfill();

const app = (
    <Provider store={store}>
        <BrowserRouter forceRefresh>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </BrowserRouter>
    </Provider>

);
   


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
