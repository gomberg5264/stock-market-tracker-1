import {
  AddSymbolTypes,
  ADD_SYMBOL_REQUESTED,
  ADD_SYMBOL_SUCCESS,
  ADD_SYMBOL_FAILED,
} from "./types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  error: null,
};

export default function addSymbol(
  state = initialState,
  action: AddSymbolTypes
) {
  switch (action.type) {
    case ADD_SYMBOL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_SYMBOL_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case ADD_SYMBOL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
