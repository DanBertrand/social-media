import ReactDOM from 'react-dom';
import App from './components/app/index';
import { createStore,} from 'redux';
import { loggedReducer } from './redux/reducers/loggedReducer';

import { Provider } from 'react-redux';

const store = createStore(
  loggedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

  <Provider store={store} >
     <App />
  </Provider>,
 
document.getElementById('root'));
 