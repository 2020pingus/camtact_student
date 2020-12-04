import {
  EDIT_AVATAR,
  EDIT_USER_INFO,
  REMOVE_AVATAR,
} from '../action/userAction';
import createReducer from '../createReducer';
import avatarImage from '../../../resources/avatar_example.jpg';

const USER_INITIAL_STATE = {
  username: '정승욱',
  email: 'example123@naver.com',
  role: '응시자',
  organization: '숭실대학교 소프트웨어학부',
  avatar: avatarImage,
};

export const userReducer = createReducer(USER_INITIAL_STATE, {
  [EDIT_USER_INFO]: (state, action) => console.log(state, action),
  [EDIT_AVATAR]: (state, action) => {
    console.log(state, action);
  },
  [REMOVE_AVATAR]: (state, action) => console.log(state, action),
});
