import { USERINFO } from "../constants/ActionTypes";

export function login(user) {
  return async dispatch => {};
}

export function signup(user) {

  return (dispatch) => {
    // return dpd.signups.post(user).then((response) => {
	  // window.localStorage.setItem("bash-id", response.id);
	  // window.localStorage.setItem("username", response.username);
	  // dispatch(userInfo(user));
    // });
  };
}

export function userInfo(user) {
  return {
    type: USERINFO,
    payload: user
  };
}
