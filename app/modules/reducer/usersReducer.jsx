/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

import createReducer from '../createReducer';

const USERS_INITIAL_STATE = {
  users: [
    {
      id: 0,
      name: '정승욱',
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