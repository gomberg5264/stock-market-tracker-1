import { cloneableGenerator } from "@redux-saga/testing-utils";
import { takeEvery } from "redux-saga/effects";
import intradayPricesSaga, { fetchIntradayPrices } from "./intradayPricesSaga";
import { GET_INTRADAY_PRICES_REQUESTED } from "../reducers/types";

describe("intradayPrices sagas", () => {
  describe("Default intradayPrices saga", () => {
    const generator = cloneableGenerator(intradayPricesSaga)();

    test("listens for every GET_INTRADAY_PRICES_REQUESTED action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(GET_INTRADAY_PRICES_REQUESTED, fetchIntradayPrices)
      );
    });
  });
});
