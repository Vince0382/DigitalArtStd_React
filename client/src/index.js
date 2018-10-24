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

import Reducer from '../src/store/reducers/reducer';
import { watcher } from './store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcher);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);
   


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
