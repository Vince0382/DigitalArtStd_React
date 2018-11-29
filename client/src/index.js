import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'babel-polyfill';
import smoothScroll from 'smoothscroll-polyfill';
import Reducer from '../src/store/reducers/reducer';
import { watcher } from './store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcher);

// kick off the polyfill!
smoothScroll.polyfill();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </BrowserRouter>
    </Provider>

);
   


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
