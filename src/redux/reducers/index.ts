import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import loadUser from "./loadUser";
import intradayPrices from "./intradayPrices";

const rootReducer = combineReducers({
  register,
  login,
  loadUser,
  intradayPrices,
});

export default rootReducer;
