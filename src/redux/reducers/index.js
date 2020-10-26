import { combineReducers } from "redux";
import intradayPrices from "./intradayPrices";

const rootReducer = combineReducers({
  intradayPrices: intradayPrices,
});

export default rootReducer;
