import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Mapa from './src/screens/Mapa';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

//const AppNavigator = StackNavigator({

//Desativar yellowBox
console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  Preload: Preload,
  Home: Home,
  Login: Login,
  Mapa: Mapa,
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

const Container = createAppContainer(AppNavigator);
