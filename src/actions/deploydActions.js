import { USERINFO } from "../constants/ActionTypes";
import dpd from "dpd-clientlib";

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
