import { cloneableGenerator } from "@redux-saga/testing-utils";
import { takeEvery } from "redux-saga/effects";
import yesterdayClosePricesSaga, { fetchYesterdayClosePrices } from "./yesterdayClosePricesSaga";
import { GET_YESTERDAY_CLOSE_PRICES_REQUESTED } from "../reducers/types";

describe("yesterdayClosePrices sagas", () => {
  describe("Default yesterdayClosePrices saga", () => {
    const generator = cloneableGenerator(yesterdayClosePricesSaga)();

    test("listens for every GET_YESTERDAY_CLOSE_PRICES_REQUESTED action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(GET_YESTERDAY_CLOSE_PRICES_REQUESTED, fetchYesterdayClosePrices)
      );
    });
  });
});
