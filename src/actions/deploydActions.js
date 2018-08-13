import { USERINFO } from "../constants/ActionTypes";

export function login(user) {
  return async dispatch => {};
}

export function signup(user) {

  return async dispatch => {
    return dpd.signups.post(user).then((response) => {
      console.log(response);
    });
  };
}

export function userInfo(userid) {
  return {
    type: USERINFO,
    payload: userid
  };
}
