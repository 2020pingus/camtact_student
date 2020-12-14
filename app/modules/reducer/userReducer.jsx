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
  noticeList: [
    {
      status: 0,
      title: '운영체제 중간고사',
      content: '응시 승인을 받았습니다.',
    },
    {
      status: 0,
      title: '캡스톤 디자인 종합 프로젝트 1 중간고사',
      content: '응시 승인을 받았습니다.',
    },
    {
      status: 0,
      title: '컴퓨터 그래픽스 중간고사',
      content: '응시 승인을 받았습니다.',
    },
    {
      status: 1,
      title: '미래 융합 기술 세미나 중간고사',
      content: '응시 거부를 받았습니다.',
    },
    {
      status: 2,
      title: '데이터베이스 응용 중간고사',
      content: '시험 점수가 발표되었습니다.',
    },
    {
      status: 0,
      title: '데이터베이스 응용 중간고사',
      content: '응시 승인을 받았습니다.',
    },
    {
      status: 2,
      title: '시스템 프로그래밍 기말고사',
      content: '시험 점수가 발표되었습니다.',
    },
    {
      status: 1,
      title: 'IoT 프로그래밍 중간고사',
      content: '응시 거부를 받았습니다.',
    },
    {
      stauts: 0,
      title: '유비쿼터스센서네트워크 중간고사',
      content: '응시 승인을 받았습니다.',
    },
  ],
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
