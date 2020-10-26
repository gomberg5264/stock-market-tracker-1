import historicalData from "./historicalData";
import {
  GET_HISTORICAL_DATA_SUCCESS,
  GET_HISTORICAL_DATA_REQUESTED,
  GET_HISTORICAL_DATA_FAILED,
  GET_HISTORICAL_DATA_DUMMY,
} from "./types";

describe("intradayPrice reducer", () => {
  it("should return the initial state", () => {
    expect(
      historicalData(undefined, { type: GET_HISTORICAL_DATA_DUMMY })
    ).toEqual({
      data: {},
      loading: false,
      error: null,
    });
  });

  it("should handle GET_HISTORICAL_DATA_REQUESTED", () => {
    expect(
      historicalData(
        { data: {}, loading: false, error: null },
        { type: GET_HISTORICAL_DATA_REQUESTED }
      )
    ).toEqual({
      data: {},
      loading: true,
      error: null,
    });
  });

  it("should handle GET_HISTORICAL_DATA_SUCCESS", () => {
    expect(
      historicalData(
        { data: {}, loading: false, error: null },
        {
          type: GET_HISTORICAL_DATA_SUCCESS,
          data: [["history"], ["current"]],
        }
      )
    ).toEqual({
      data: [["history"], ["current"]],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_HISTORICAL_DATA_FAILED", () => {
    expect(
      historicalData(
        { data: {}, loading: false, error: null },
        {
          type: GET_HISTORICAL_DATA_FAILED,
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
