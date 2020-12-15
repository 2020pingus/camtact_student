/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

import createReducer from '../createReducer';

const USERS_INITIAL_STATE = {
  users: [
    {
      id: 0,
      name: '정승욱',
      email: 'wjdtmddnr24@naver.com',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: true,
      isConnected: true,
    },
    {
      id: 1,
      name: '조혜은',
      email: 'kancho1216@naver.com',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: false,
      isConnected: true,
    },
    {
      id: 2,
      name: '허예은',
      email: '',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: true,
      isConnected: true,
    },
    {
      id: 3,
      name: '김은혜',
      email: '',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: false,
      isConnected: false,
    },
    {
      id: 4,
      name: '시험자1',
      email: '',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: false,
      isConnected: false,
    },
    {
      id: 5,
      name: '시험자2',
      email: '',
      ip: '127.0.0.1',
      speed: 1,
      time: '2020년 12월 7일 12시',
      numSolvedProblem: 23,
      isDetected: false,
      isConnected: false,
    },
  ],
};

export const usersReducer = createReducer(USERS_INITIAL_STATE, {});
