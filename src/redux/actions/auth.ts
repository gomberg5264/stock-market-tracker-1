import * as type from "../reducers/types";

type RegisterUserType = {
  name: string;
  email: string;
  password: string;
};

type LoginUserType = {
  email: string;
  password: string;
};

export function registerUser(userData: RegisterUserType) {
  return {
    type: type.REGISTER_USER_REQUESTED,
    data: userData,
  };
}

export function loginUser(userData: LoginUserType): any {
  return {
    type: type.LOGIN_USER_REQUESTED,
    payload: userData,
  };
}

export const loadUser = (token: string) => {
  return {
    type: type.LOAD_USER_REQUESTED,
    payload: token,
  };
};

export const logoutUser = () => {
  return {
    type: type.LOGOUT,
  };
};
