import { combineReducers } from "redux";
import intradayPrices from "./intradayPrices";
import yesterdayClosePrices from "./yesterdayClosePrices";
import historicalData from "./historicalData";

const rootReducer = combineReducers({
  intradayPrices,
  yesterdayClosePrices,
  historicalData,
});

export default rootReducer;
