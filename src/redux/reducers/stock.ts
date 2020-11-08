import * as type from "./types";

const initialState = {
  name: "",
};

const stock = (state = initialState, action: type.StockTypes) => {
  switch (action.type) {
    case "UPDATE_STOCK":
      return { name: action.name };
    default:
      return state;
  }
};
export default stock;