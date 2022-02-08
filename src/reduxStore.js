/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducerMain';
import sagaMain from './sagaMain';

const sagaMiddleware = createSagaMiddleware();
// Redux Store holds all the state and

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaMain);
