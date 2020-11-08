import quote from "./quote";
import {
  GET_QUOTE_SUCCESS,
  GET_QUOTE_REQUESTED,
  GET_QUOTE_FAILED,
  GET_QUOTE_DUMMY,
} from "./types";

describe("quote reducer", () => {
  it("should return the initial state", () => {
    expect(
      quote(undefined, {
        type: GET_QUOTE_DUMMY,
      })
    ).toEqual({
      data: {},
      loading: false,
      error: null,
    });
  });

  it("should handle GET_QUOTE_REQUESTED", () => {
    expect(
      quote(
        { data: {}, loading: false, error: null },
        { type: GET_QUOTE_REQUESTED }
      )
    ).toEqual({
      data: {},
      loading: true,
      error: null,
    });
  });

  it("should handle GET_QUOTE_SUCCESS", () => {
    expect(
      quote(
        { data: {}, loading: false, error: null },
        {
          type: GET_QUOTE_SUCCESS,
          data: {
            AAPL: {},
            GOOG: {},
            MSFT: {},
            TSLA: {},
          },
        }
      )
    ).toEqual({
      data: {
        AAPL: {},
        GOOG: {},
        MSFT: {},
        TSLA: {},
      },
      loading: false,
      error: null,
    });
  });

  it("should handle GET_QUOTE_FAILED", () => {
    expect(
      quote(
        { data: {}, loading: false, error: null },
        {
          type: GET_QUOTE_FAILED,
          message: "Something went wrong",
        }
      )
    ).toEqual({
      data: {},
      loading: false,
      error: "Something went wrong",
    });
  });
});
