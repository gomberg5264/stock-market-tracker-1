import { cloneableGenerator } from "@redux-saga/testing-utils";
import { takeEvery } from "redux-saga/effects";
import historicalDataSaga, { fetchHistoricalData } from "./historicalDataSaga";
import { GET_HISTORICAL_DATA_REQUESTED } from "../reducers/types";

describe("historicalData sagas", () => {
  describe("Default historicalData saga", () => {
    const generator = cloneableGenerator(historicalDataSaga)();

    test("listens for every GET_INTRADAY_PRICES_REQUESTED action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(GET_HISTORICAL_DATA_REQUESTED, fetchHistoricalData)
      );
    });
  });
});
