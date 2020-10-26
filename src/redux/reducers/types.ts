export const GET_INTRADAY_PRICES_REQUESTED = "GET_INTRADAY_PRICES_REQUESTED";
export const GET_INTRADAY_PRICES_SUCCESS = "GET_INTRADAY_PRICES_SUCCESS";
export const GET_INTRADAY_PRICES_FAILED = "GET_INTRADAY_PRICES_FAILED";
export const GET_INTRADAY_PRICES_DUMMY = "GET_INTRADAY_PRICES_DUMMY";

interface GetIntradayPricesRequested {
  type: typeof GET_INTRADAY_PRICES_REQUESTED;
}
interface GetIntradayPricesSuccess {
  type: typeof GET_INTRADAY_PRICES_SUCCESS;
  prices: object;
}
interface GetIntradayPricesFailed {
  type: typeof GET_INTRADAY_PRICES_FAILED;
  message: string;
}
interface GetIntradayClosePricesDummy {
  type: typeof GET_INTRADAY_PRICES_DUMMY;
}

export const GET_YESTERDAY_CLOSE_PRICES_REQUESTED =
  "GET_YESTERDAY_CLOSE_PRICES_REQUESTED";
export const GET_YESTERDAY_CLOSE_PRICES_SUCCESS =
  "GET_YESTERDAY_CLOSE_PRICES_SUCCESS";
export const GET_YESTERDAY_CLOSE_PRICES_FAILED =
  "GET_YESTERDAY_CLOSE_PRICES_FAILED";
export const GET_YESTERDAY_CLOSE_PRICES_DUMMY =
  "GET_YESTERDAY_CLOSE_PRICES_DUMMY";

interface GetYesterdayClosePricesRequested {
  type: typeof GET_YESTERDAY_CLOSE_PRICES_REQUESTED;
}
interface GetYesterdayClosePricesSuccess {
  type: typeof GET_YESTERDAY_CLOSE_PRICES_SUCCESS;
  prices: object;
}
interface GetYesterdayClosePricesFailed {
  type: typeof GET_YESTERDAY_CLOSE_PRICES_FAILED;
  message: string;
}
interface GetYesterdayClosePricesDummy {
  type: typeof GET_YESTERDAY_CLOSE_PRICES_DUMMY;
}

export const GET_HISTORICAL_DATA_REQUESTED = "GET_HISTORICAL_DATA_REQUESTED";
export const GET_HISTORICAL_DATA_SUCCESS = "GET_HISTORICAL_DATA_SUCCESS";
export const GET_HISTORICAL_DATA_FAILED = "GET_HISTORICAL_DATA_FAILED";
export const GET_HISTORICAL_DATA_DUMMY = "GET_HISTORICAL_DATA_DUMMY";

interface GetHistoricalDataRequested {
  type: typeof GET_HISTORICAL_DATA_REQUESTED;
}
interface GetHistoricalDataSuccess {
  type: typeof GET_HISTORICAL_DATA_SUCCESS;
  data: object;
}
interface GetHistoricalDataFailed {
  type: typeof GET_HISTORICAL_DATA_FAILED;
  message: string;
}
interface GetHistoricalDataDummy {
  type: typeof GET_HISTORICAL_DATA_DUMMY;
}

export type IntradayPricesTypes =
  | GetIntradayPricesRequested
  | GetIntradayPricesSuccess
  | GetIntradayPricesFailed
  | GetIntradayClosePricesDummy;

export type YesterdayClosePricesTypes =
  | GetYesterdayClosePricesRequested
  | GetYesterdayClosePricesSuccess
  | GetYesterdayClosePricesFailed
  | GetYesterdayClosePricesDummy;

export type HistoricalDataTypes =
  | GetHistoricalDataRequested
  | GetHistoricalDataSuccess
  | GetHistoricalDataFailed
  | GetHistoricalDataDummy;
