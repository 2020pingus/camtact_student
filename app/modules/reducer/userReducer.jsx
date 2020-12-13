import {
  EDIT_AVATAR,
  EDIT_USER_INFO,
  MOVE_TO_PAGE,
  REMOVE_AVATAR,
} from '../action/userAction';
import createReducer from '../createReducer';
import avatarImage from '../../../resources/avatar_example.jpg';

const EXAM_LIST = 0;
const MY_PAGE = 1;
const CREATE_EXAM = 2;

const USER_INITIAL_STATE = {
  username: '정승욱',
  email: 'example123@naver.com',
  role: '응시자',
  organization: '숭실대학교 소프트웨어학부',
  currentPage: MY_PAGE,
  avatar: avatarImage,
  
};

export const userReducer = createReducer(USER_INITIAL_STATE, {
  [EDIT_USER_INFO]: (state, action) => console.log(state, action),
  [EDIT_AVATAR]: (state, action) => {
    console.log(state, action);
  },
  [REMOVE_AVATAR]: (action) => console.log(action),
  [MOVE_TO_PAGE]: (state, action) => {
    state.currentPage = action.page;
  },
});
