import * as type from "../reducers/types";

export function getQuote(): type.QuoteTypes {
  return {
    type: type.GET_QUOTE_REQUESTED,
  };
}
