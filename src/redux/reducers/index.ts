import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import loadUser from "./loadUser";
import intradayPrices from "./intradayPrices";
import quote from "./quote";
import createWatchlist from "./createWatchlist";
import addSymbol from "./symbol";

const rootReducer = combineReducers({
  register,
  login,
  loadUser,
  intradayPrices,
  quote,
  createWatchlist,
  addSymbol,
});

export default rootReducer;
