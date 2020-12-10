import {
  MOVE_TO_PROBLEM,
  CHECK_PROBLEM,
  SOLVE_PROBLEM,
  UNCHECK_PROBLEM,
} from '../action/examAction';
import createReducer from '../createReducer';

const SINGLE_CHOICE = 0;
const MULTIPLE_CHOICE = 1;
const SHORT_ANSWER = 2;
const LONG_ANSWER = 3;

const EXAM_INITIAL_STATE = {
  currentProblem: 0,
  problems: [
    {
      type: SINGLE_CHOICE,
      title: '객관식 1',
      score: 5,
      question: '다음 글에서 틀린 단어가 포함된 구절은?',
      questionContent:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uzzalco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      choices: [
        'Lorem ipsum dolor sit amet',
        'Ut enim ad minim veniam, quis nostrud exercitation uzzalco',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident',
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      isSolved: false,
      check: false,
    },
    {
      type: MULTIPLE_CHOICE,
      title: '객관식 2',
      score: 10,
      question: '다음 글에서 틀린 단어가 포함된 구절은?',
      questionContent:
        'Lorem ipsum dolor sat amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uzzalco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      choices: [
        'Lorem ipsum dolor sat amet',
        'Ut enim ad minim veniam, quis nostrud exercitation uzzalco',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident',
        'sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      isSolved: false,
      check: false,
    },
    // {
    //   type: SHORT_ANSWER,
    //   title: '주관식 1',
    //   score: 20,
    //   question: '빈칸에 들어갈 알맞은 단어를 쓰시오.',
    //   questionContent:
    //     'Lorem [            ] dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uzzalco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   isSolved: false,
    //   check: false,
    // },
    // {
    //   type: LONG_ANSWER,
    //   title: '서술형 1',
    //   score: 50,
    //   question: 'Lorem ipsum 에 대해 논하시오.',
    //   isSolved: false,
    //   check: false,
    // },
  ],
};

export const examReducer = createReducer(EXAM_INITIAL_STATE, {
  [MOVE_TO_PROBLEM]: (state, action) => {
    state.currentProblem = action.problemId;
  },
  [SOLVE_PROBLEM]: (state, action) => {
    const index = action.problemId;
    state.problems[index].isSolved = true;
  },
  [CHECK_PROBLEM]: (state, action) => {
    const index = action.problemId;
    state.problems[index].check = true;
  },
  [UNCHECK_PROBLEM]: (state, action) => {
    const index = action.problemId;
    state.problems[index].check = false;
  },
});
