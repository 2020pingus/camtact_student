import { createStore, combineReducers } from 'redux';
import userReducer from './reducer/userReducer';

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;
