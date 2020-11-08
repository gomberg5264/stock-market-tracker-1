import * as type from "../reducers/types";

export function updateStock(name: string ) {
  return {
    type: type.UPDATE_STOCK,
    name: name,
  };
}
