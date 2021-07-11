import {
  LoadUserTypes,
  LOAD_USER_REQUESTED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  LOGOUT,
} from "./types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  error: null,
  isAuthenticated: null,
};
export default function loadUser(state = initialState, action: LoadUserTypes) {
  switch (action.type) {
    case LOAD_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      localStorage.setItem("id", action.payload.user._id);
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOAD_USER_FAILED:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.message,
      };
    default:
      return state;
  }
}
