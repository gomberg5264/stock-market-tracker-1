import * as type from "../reducers/types";

export function getIntradayPrices() {
  return {
    type: type.GET_INTRADAY_PRICES_REQUESTED,
  };
}
