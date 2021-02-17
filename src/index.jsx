/* eslint-disable no-unused-vars */

import React, { useDispatch } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import { createStore, compose,  applyMiddleware, combineReducers } from 'redux';
import { loggedReducer } from './redux/reducers/loggedReducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import userInfoReducer from './redux/reducers/userInfoReducer'

const rootReducer = combineReducers({
  loggedReducer: loggedReducer,
  userInfoReducer: userInfoReducer
})
 
const store = createStore(
  rootReducer,
   compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

  <Provider store={store} >
     <App />
  </Provider>,
 
document.getElementById('root'));
 