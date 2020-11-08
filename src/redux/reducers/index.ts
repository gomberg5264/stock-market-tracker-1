import { combineReducers } from "redux";
import intradayPrices from "./intradayPrices";
import quote from "./quote";
import stock from "./stock";
import historicalData from "./historicalData";

const rootReducer = combineReducers({
  intradayPrices,
  quote,
  historicalData,
  stock
});

export default rootReducer;
