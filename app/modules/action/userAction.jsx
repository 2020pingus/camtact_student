// action type
export const EDIT_USER_INFO = 'user/EDIT_USER_INFO';
export const EDIT_AVATAR = 'user/EDIT_AVATAR';
export const REMOVE_AVATAR = 'user/REMOVE_AVATAR';
export const MOVE_TO_PAGE = 'user/MOVE_TO_PAGE';
export const LOGIN = 'user/LOGIN';
// action creators
export function editUserInfo(userInfo) {
  return { type: EDIT_USER_INFO, userInfo };
}
export function editAvatar(imgUrl) {
  return { type: EDIT_AVATAR, imgUrl };
}

export function removeAvatar() {
  return { type: REMOVE_AVATAR };
}

export function moveToAnotherPage(page) {
  return { type: MOVE_TO_PAGE, page };
}

export function login(id) {
  return { type: LOGIN, id };
}
