import { call, put, takeEvery } from "redux-saga/effects";

export function getYesterdayClosePrices() {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=previous&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((yesterday) => {
      const data = [];
      for (let tick in yesterday) {
        data.push(yesterday[tick]["previous"]["close"]);
      }
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchYesterdayClosePrices() {
  try {
    const prices = yield call(getYesterdayClosePrices);
    yield put({
      type: "GET_YESTERDAY_CLOSE_PRICES_SUCCESS",
      prices,
    });
  } catch (e) {
    yield put({
      type: "GET_YESTERDAY_CLOSE_PRICES_FAILED",
      message: e.message,
    });
  }
}

function* yesterdayClosePricesSaga() {
  yield takeEvery(
    "GET_YESTERDAY_CLOSE_PRICES_REQUESTED",
    fetchYesterdayClosePrices
  );
}

export default yesterdayClosePricesSaga;
