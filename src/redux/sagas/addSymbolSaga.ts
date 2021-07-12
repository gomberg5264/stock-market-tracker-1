import { call, put, takeEvery } from "redux-saga/effects";

export function addSymbolAPI(data: any) {
  return fetch("http://localhost:5000/user/add-symbol", {
    method: "POST",
    headers: {
      Authorisation: data.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      watchListName: data.watchlistName,
      symbol: data.symbolName,
    }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw await response.json();
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error.message);
    });
}

export function* addSymbol(action: any): any {
  try {
    const response = yield addSymbolAPI(action.payload);

    yield put({
      type: "ADD_SYMBOL_SUCCESS",
      payload: response,
    });
  } catch (e) {
    yield put({ type: "ADD_SYMBOL_FAILED", message: e.message });
  }
}

function* addSymbolSaga() {
  console.log("helllooo");
  yield takeEvery("ADD_SYMBOL_REQUESTED", addSymbol);
}

export default addSymbolSaga;
