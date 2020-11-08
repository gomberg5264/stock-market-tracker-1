import * as type from "./types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function quote(
  state = initialState,
  action: type.QuoteTypes
) {
  switch (action.type) {
    case type.GET_QUOTE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case type.GET_QUOTE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
