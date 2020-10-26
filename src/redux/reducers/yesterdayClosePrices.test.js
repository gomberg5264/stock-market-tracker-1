import yesterdayClosePrices from "./yesterdayClosePrices";
import {
  GET_YESTERDAY_CLOSE_PRICES_SUCCESS,
  GET_YESTERDAY_CLOSE_PRICES_REQUESTED,
  GET_YESTERDAY_CLOSE_PRICES_FAILED,
} from "./types";

describe("intradayPrice reducer", () => {
  it("should return the initial state", () => {
    expect(yesterdayClosePrices(undefined, {})).toEqual({
      prices: [],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_YESTERDAY_CLOSE_PRICES_REQUESTED", () => {
    expect(
        yesterdayClosePrices(
        { prices: [], loading: false, error: null },
        { type: GET_YESTERDAY_CLOSE_PRICES_REQUESTED }
      )
    ).toEqual({
      prices: [],
      loading: true,
      error: null,
    });
  });

  it("should handle GET_YESTERDAY_CLOSE_PRICES_SUCCESS", () => {
    expect(
        yesterdayClosePrices(
        { prices: [], loading: false, error: null },
        {
          type: GET_YESTERDAY_CLOSE_PRICES_SUCCESS,
          prices: {
            AAPL: {},
            GOOG: {},
            MSFT: {},
            TSLA: {},
          },
        }
      )
    ).toEqual({
      prices: {
        AAPL: {},
        GOOG: {},
        MSFT: {},
        TSLA: {},
      },
      loading: false,
      error: null,
    });
  });

  it("should handle GET_YESTERDAY_CLOSE_PRICES_FAILED", () => {
    expect(
        yesterdayClosePrices(
        { prices: [], loading: false, error: null },
        {
          type: GET_YESTERDAY_CLOSE_PRICES_FAILED,
          message: "Something went wrong",
        }
      )
    ).toEqual({
      prices: [],
      loading: false,
      error: "Something went wrong",
    });
  });
});
