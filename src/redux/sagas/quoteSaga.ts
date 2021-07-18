import { put, takeEvery } from "redux-saga/effects";

export function getQuote(symbols:any) {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=${symbols}&types=quote&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((quote) => {
      const quoteData = [];
      for (let data in quote) {
        quoteData.push(quote[data]["quote"]);
      }
      return quoteData;
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchQuote(action:any): any {
  try {
    const data = yield getQuote(action.payload);
    yield put({
      type: "GET_QUOTE_SUCCESS",
      data,
    });
  } catch (e) {
    yield put({
      type: "GET_QUOTE_FAILED",
      message: e.message,
    });
  }
}

function* quoteSaga() {
  yield takeEvery("GET_QUOTE_REQUESTED", fetchQuote);
}

export default quoteSaga;
