import {combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';

//Combina todos os reducers e envia para app.js
const Reducers = combineReducers({
  auth: AuthReducer,
});

export default Reducers;
