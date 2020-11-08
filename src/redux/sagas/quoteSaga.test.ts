import { cloneableGenerator } from "@redux-saga/testing-utils";
import { takeEvery } from "redux-saga/effects";
import quoteSaga, { fetchQuote } from "./quoteSaga";
import { GET_QUOTE_REQUESTED } from "../reducers/types";

describe("quote sagas", () => {
  describe("Default yesterdayClosePrices saga", () => {
    const generator = cloneableGenerator(quoteSaga)();

    test("listens for every GET_QUOTE_REQUESTED action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(GET_QUOTE_REQUESTED, fetchQuote)
      );
    });
  });
});
