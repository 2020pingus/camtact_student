/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import {
  TESTER_CONNECT_SERVER,
  TESTSER_ADD_PEER,
} from '../action/testerAction';
import createReducer from '../createReducer';

const TESTER_INITIAL_STATE = {
  socket: null,
  p: null,
};

export const testerReducer = createReducer(TESTER_INITIAL_STATE, {
  [TESTSER_ADD_PEER]: async (state, action) => {
    console.log(state, action);
  },
  [TESTER_CONNECT_SERVER]: (state, action) => {
    console.log('asdf');
    const { tid } = action.payload;
    const name = 'broadcaster';
    const socket = io('https://hia.chocola.moe:443');
    const p = new SimplePeer({
      initiator: true,
      config: {
        iceServers: [
          {
            urls: 'turn:49.247.133.224:3478?transport=tcp',
            username: 'test',
            credential: 'test',
          },
        ],
      },
    });
    state.socket = socket;
    state.p = p;
    socket.on('connect', () => {
      console.log('s connected');
      socket.emit('client', { name, tid });
    });

    p.on('connect', () => {
      console.log('connected!');
      // window.onbeforeunload = () => p.destroy();
    });

    p.on('close', () => {
      console.log('closed!');
    });

    p.on('signal', (data) => {
      // console.log(data);
      socket.emit('signal', data);
    });

    socket.on('signal', (data) => p.signal(data));

    socket.on('disconnect', () => p.destroy());
  },
});
