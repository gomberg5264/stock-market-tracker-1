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

export const GET_QUOTE_REQUESTED = "GET_QUOTE_REQUESTED";
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
export const GET_QUOTE_FAILED = "GET_QUOTE_FAILED";
export const GET_QUOTE_DUMMY = "GET_QUOTE_DUMMY";

interface GetQuoteRequested {
  type: typeof GET_QUOTE_REQUESTED;
}
interface GetQuoteSuccess {
  type: typeof GET_QUOTE_SUCCESS;
  data: object;
}
interface GetQuoteFailed {
  type: typeof GET_QUOTE_FAILED;
  message: string;
}
interface GetQuoteDummy {
  type: typeof GET_QUOTE_DUMMY;
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
  data: Array<object>;
}
interface GetHistoricalDataFailed {
  type: typeof GET_HISTORICAL_DATA_FAILED;
  message: string;
}
interface GetHistoricalDataDummy {
  type: typeof GET_HISTORICAL_DATA_DUMMY;
}

export const UPDATE_STOCK = "UPDATE_STOCK";

interface UpdateStock {
  type: typeof UPDATE_STOCK;
  name: string;
}

export type StockTypes = UpdateStock;

export type IntradayPricesTypes =
  | GetIntradayPricesRequested
  | GetIntradayPricesSuccess
  | GetIntradayPricesFailed
  | GetIntradayClosePricesDummy;

export type QuoteTypes =
  | GetQuoteRequested
  | GetQuoteSuccess
  | GetQuoteFailed
  | GetQuoteDummy;

export type HistoricalDataTypes =
  | GetHistoricalDataRequested
  | GetHistoricalDataSuccess
  | GetHistoricalDataFailed
  | GetHistoricalDataDummy;
