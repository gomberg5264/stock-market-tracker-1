import {
  LoginUserTypes,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "./types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  error: null,
  isAuthenticated: null,
  user: {},
};

export default function login(state = initialState, action: LoginUserTypes) {
  switch (action.type) {
    case LOGIN_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true,
        user: action.payload.result,
      };
    case LOGIN_USER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
