// action type
export const TESTSER_ADD_PEER = 'tester/ADD_PEER';
export const TESTER_CONNECT_SERVER = 'tester/CONNECT_SERVER';

// action creators
export function testerAddPeer(payload) {
  return { type: TESTSER_ADD_PEER, payload };
}

export function testerConnectServer(payload) {
  return { type: TESTER_CONNECT_SERVER, payload };
}
