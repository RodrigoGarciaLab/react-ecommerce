import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
//import 'semantic-ui-css/semantic.min.css';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts, getAllUsers } from './actions';
import Layout from './containers/Layout';

const middlewares = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

store.dispatch(getAllProducts())
store.dispatch(getAllUsers())

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)
