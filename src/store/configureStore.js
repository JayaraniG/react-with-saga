import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';
import rootReducer from '../reducers/rootReducer';
import { logActions, loginFlow,saga} from '../sagas/loginSaga';
import {registerFlow} from '../sagas'
import rootSaga from '../sagas';

export default function configureStore (history, initialState) {
 // const reducers = {
  //  counter: Counter.reducer,
   // weatherForecasts: WeatherForecasts.reducer
  //};
    const sagaMiddleware = createSagaMiddleware()
  const middleware = [
     // thunk,
      sagaMiddleware,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }



    const store = createStore(
      rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
    );
     // sagaMiddleware.run(saga);
     // sagaMiddleware.run(logActions);
      sagaMiddleware.run(rootSaga);
      return store;
}
