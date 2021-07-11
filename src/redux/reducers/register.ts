import {
  RegisterUserTypes,
  REGISTER_USER_REQUESTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  registered: false
};

export default function register(
  state = initialState,
  action: RegisterUserTypes
) {
  switch (action.type) {
    case REGISTER_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        registered: true,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
