import * as type from "../reducers/types";

type AddSymbolType = {
  symbolName: string;
  watchlistName: string;
  token: string;
};

export function addSymbol(data: AddSymbolType): any {
  return {
    type: type.ADD_SYMBOL_REQUESTED,
    payload: data,
  };
}
