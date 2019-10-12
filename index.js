import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Store} from './src/store';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//ReactDOM.render(
return (
  <Provider store={Store}>
    <App />
  </Provider>,
  //document.getElementById('root'),
)
//registerServiceWorker();
