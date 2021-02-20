import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/index';
import loggedReducer from './redux/reducers/loggedReducer';

const store = createStore(
  loggedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);
