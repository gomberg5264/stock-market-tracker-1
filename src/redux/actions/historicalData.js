import * as type from "../reducers/types";

export function getHistoricalData() {
  return {
    type: type.GET_HISTORICAL_DATA_REQUESTED,
  };
}
