import MOVE_PROBLEM_ID from '../action/examAction';
import createReducer from '../createReducer';

const PROBLEM_ID_INITIAL_STATE = { id: 0 };

const examReducer = createReducer(PROBLEM_ID_INITIAL_STATE, {
  [MOVE_PROBLEM_ID]: (state, action) => {
    console.log(state, action);
  },
});
export default examReducer;
