// action type
export const EDIT_USER_INFO = 'user/EDIT_USER_INFO';
export const EDIT_AVATAR = 'user/EDIT_AVATAR';
export const REMOVE_AVATAR = 'user/REMOVE_AVATAR';

// action creators
export function editUserInfo(userInfo) {
  return { type: EDIT_USER_INFO, userInfo };
}
export function editAvatar({ img }) {
  return { type: EDIT_AVATAR, img };
}

export function removeAvatar({}) {
  return { type: REMOVE_AVATAR };
}
