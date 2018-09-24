import React from 'react';
import ReactDOM from 'react-dom';
import './global.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './components/App/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

registerServiceWorker();
