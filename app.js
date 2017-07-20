import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootReducer from './app/src/reducers';
import rootEpic from './app/src/epics';
import App from './app/src';

const epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(rootReducer,applyMiddleware(epicMiddleware));

let App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App; 
