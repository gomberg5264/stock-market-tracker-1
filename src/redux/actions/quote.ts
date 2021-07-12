import * as type from "../reducers/types";

export function getQuote(symbols:any): type.QuoteTypes {
  return {
    type: type.GET_QUOTE_REQUESTED,
    payload: symbols
  };
}
