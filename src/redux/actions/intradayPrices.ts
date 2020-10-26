import * as type from "../reducers/types";

export function getIntradayPrices(): type.IntradayPricesTypes {
  return {
    type: type.GET_INTRADAY_PRICES_REQUESTED,
  };
}
