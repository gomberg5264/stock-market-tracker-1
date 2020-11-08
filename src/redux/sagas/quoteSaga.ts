import { call, put, takeEvery } from "redux-saga/effects";

export function getQuote() {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=mcd,coke,fb,race,msft,dg&types=quote&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((quote) => {
      const quoteData = []
      for (let data in quote) {
        quoteData.push(quote[data]["quote"])
      }
      return quoteData;
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchQuote() {
  try {
    const data = yield call(getQuote);
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
  yield takeEvery(
    "GET_QUOTE_REQUESTED",
    fetchQuote
  );
}

export default quoteSaga;
