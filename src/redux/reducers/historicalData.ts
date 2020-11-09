import * as type from "./types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function historicalData(
  state = initialState,
  action: type.HistoricalDataTypes
) {
  switch (action.type) {
    case type.GET_HISTORICAL_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case type.GET_HISTORICAL_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
