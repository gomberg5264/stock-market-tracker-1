import * as type from "../reducers/types";

export function getHistoricalData(): type.HistoricalDataTypes {
  return {
    type: type.GET_HISTORICAL_DATA_REQUESTED,
  };
}
