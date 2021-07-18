import * as type from "./types";

const initialState = {
  prices: [],
  loading: true,
  error: null,
};

export default function intradayPrices(
  state = initialState,
  action: type.IntradayPricesTypes
) {
  switch (action.type) {
    case type.GET_INTRADAY_PRICES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_INTRADAY_PRICES_SUCCESS:
      return {
        ...state,
        loading: false,
        prices: action.prices,
      };
    case type.GET_INTRADAY_PRICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
