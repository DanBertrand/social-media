/* eslint-disable no-unused-vars */

import React, { useDispatch } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import { createStore, compose,  applyMiddleware } from 'redux';
import LoggedReducer from './redux/reducers/loggedReducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';


 
const store = createStore(
  LoggedReducer,
   compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

  <Provider store={store} >
     <App />
  </Provider>,
 
document.getElementById('root'));
 