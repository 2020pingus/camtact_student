import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
import { userReducer } from './modules/reducer/userReducer';
import { examReducer } from './modules/reducer/examReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    user: userReducer,
    exam: examReducer,
  });
}
