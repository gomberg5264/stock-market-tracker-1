import * as type from "./types";

const initialState = {
  prices: [],
  loading: false,
  error: null,
};

export default function yesterdayClosePrices(state = initialState, action) {
  switch (action.type) {
    case type.GET_YESTERDAY_CLOSE_PRICES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_YESTERDAY_CLOSE_PRICES_SUCCESS:
      return {
        ...state,
        loading: false,
        prices: action.prices,
      };
    case type.GET_YESTERDAY_CLOSE_PRICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
