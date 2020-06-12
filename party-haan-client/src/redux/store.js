import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';

import rootReducer from './reducers';

const { NODE_ENV } = process.env;
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (
  typeof window !== 'undefined'
  && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
  && NODE_ENV === 'development'
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(saga);

export default store;
