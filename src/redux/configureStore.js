import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/reducers';
const defaultMiddlewares = [
    thunk,
    promiseMiddleware
];

const composeMiddlewares = middlewares =>
  compose(
    applyMiddleware(...defaultMiddlewares, ...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const initialize = (initialState = {}, middlewares = []) =>
    createStore(reducers, initialState, composeMiddlewares(middlewares));

export default initialize;