import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
import { userReducer } from './modules/reducer/userReducer';
import { usersReducer } from './modules/reducer/usersReducer';
import { examReducer } from './modules/reducer/examReducer';
import { testerReducer } from './modules/reducer/testerReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    user: userReducer,
    users: usersReducer,
    exam: examReducer,
    tester: testerReducer,
  });
}
