import * as type from "../reducers/types";

export function getYesterdayClosePrices(): type.YesterdayClosePricesTypes {
  return {
    type: type.GET_YESTERDAY_CLOSE_PRICES_REQUESTED,
  };
}
