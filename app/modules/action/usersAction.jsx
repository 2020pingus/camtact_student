// action type
export const USERS_SET_USER = 'users/SET_USER';

// action creators
export function testerAddPeer(payload) {
  return { type: USERS_SET_USER, payload };
}
