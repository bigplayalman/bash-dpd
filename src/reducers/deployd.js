import { USERINFO, AUTH_USER } from "../constants/ActionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case USERINFO:
      return Object.assign({}, state, {
        userid: action.payload
      });
      case AUTH_USER:
      return {...state, error: "", authenticated: true};
  }

  return state;
}
