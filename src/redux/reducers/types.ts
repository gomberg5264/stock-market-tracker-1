export const REGISTER_USER_REQUESTED = "REGISTER_USER_REQUESTED";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

interface RegisterUserRequested {
  type: typeof REGISTER_USER_REQUESTED;
}
interface RegisterUserSuccess {
  type: typeof REGISTER_USER_SUCCESS;
}
interface RegisterUserFailed {
  type: typeof REGISTER_USER_FAILED;
  message: string;
}

export type RegisterUserTypes =
  | RegisterUserRequested
  | RegisterUserSuccess
  | RegisterUserFailed;

export const LOGIN_USER_REQUESTED = "LOGIN_USER_REQUESTED";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

interface LoginUserRequested {
  type: typeof LOGIN_USER_REQUESTED;
}
interface LoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: any;
}
interface LoginUserFailed {
  type: typeof LOGIN_USER_FAILED;
  message: string;
}

export type LoginUserTypes =
  | LoginUserRequested
  | LoginUserSuccess
  | LoginUserFailed;

export const LOAD_USER_REQUESTED = "LOAD_USER_REQUESTED";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILED = "LOAD_USER_FAILED";
export const LOGOUT = "LOUGOUT";

interface LoadUserRequested {
  type: typeof LOAD_USER_REQUESTED;
}
interface LoadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: any;
}
interface LoadUserFailed {
  type: typeof LOAD_USER_FAILED;
  message: string;
}
interface Logout {
  type: typeof LOGOUT;
  message: string;
}

export type LoadUserTypes =
  | LoadUserRequested
  | LoadUserSuccess
  | LoadUserFailed
  | Logout;

export const GET_INTRADAY_PRICES_REQUESTED = "GET_INTRADAY_PRICES_REQUESTED";
export const GET_INTRADAY_PRICES_SUCCESS = "GET_INTRADAY_PRICES_SUCCESS";
export const GET_INTRADAY_PRICES_FAILED = "GET_INTRADAY_PRICES_FAILED";

interface GetIntradayPricesRequested {
  type: typeof GET_INTRADAY_PRICES_REQUESTED;
}
interface GetIntradayPricesSuccess {
  type: typeof GET_INTRADAY_PRICES_SUCCESS;
  prices: object;
}
interface GetIntradayPricesFailed {
  type: typeof GET_INTRADAY_PRICES_FAILED;
  message: string;
}

export type IntradayPricesTypes =
  | GetIntradayPricesRequested
  | GetIntradayPricesSuccess
  | GetIntradayPricesFailed;
