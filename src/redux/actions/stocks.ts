import * as type from "../reducers/types";

export function getIntradayPrices(symbols:any): type.IntradayPricesTypes {
  return {
    type: type.GET_INTRADAY_PRICES_REQUESTED,
    payload: symbols
  };
}

export function getQuote(symbols:any): type.QuoteTypes {
  return {
    type: type.GET_QUOTE_REQUESTED,
    payload: symbols
  };
}

export function getHistoricalPrices(symbols:any): type.HistoricalPricesTypes {
  return {
    type: type.GET_HISTORICAL_PRICES_REQUESTED,
    payload: symbols
  };
}
