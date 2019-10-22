import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcher } from './sagas';

import mainReducer from './reducers/main';

const rootReducer = combineReducers({
    main: mainReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware( sagaMiddleware )));

sagaMiddleware.run(watcher);