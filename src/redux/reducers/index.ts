import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import loadUser from "./loadUser";
import intradayPrices from "./intradayPrices";
import historicalPrices from "./historicalPrices";
import quote from "./quote";
import createWatchlist from "./createWatchlist";
import addSymbol from "./symbol";

const rootReducer = combineReducers({
  register,
  login,
  loadUser,
  intradayPrices,
  historicalPrices,
  quote,
  createWatchlist,
  addSymbol,
});

export default rootReducer;
