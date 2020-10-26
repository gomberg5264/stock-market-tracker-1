import intradayPrices from "./intradayPrices";
import {
  GET_INTRADAY_PRICES_SUCCESS,
  GET_INTRADAY_PRICES_REQUESTED,
  GET_INTRADAY_PRICES_FAILED,
} from "./types";

describe("intradayPrice reducer", () => {
  it("should return the initial state", () => {
    expect(intradayPrices(undefined, {})).toEqual({
      prices: [],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_INTRADAY_PRICES_REQUESTED", () => {
    expect(
      intradayPrices(
        { prices: [], loading: false, error: null },
        { type: GET_INTRADAY_PRICES_REQUESTED }
      )
    ).toEqual({
      prices: [],
      loading: true,
      error: null,
    });
  });

  it("should handle GET_INTRADAY_PRICES_SUCCESS", () => {
    expect(
      intradayPrices(
        { prices: [], loading: false, error: null },
        {
          type: GET_INTRADAY_PRICES_SUCCESS,
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

  it("should handle GET_INTRADAY_PRICES_FAILED", () => {
    expect(
      intradayPrices(
        { prices: [], loading: false, error: null },
        {
          type: GET_INTRADAY_PRICES_FAILED,
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
