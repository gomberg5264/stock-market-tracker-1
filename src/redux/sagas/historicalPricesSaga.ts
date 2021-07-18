import { put, takeEvery } from "redux-saga/effects";

export function getHistoricalPricesApi(symbols: any) {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=${symbols}&types=chart&range=1y&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((historicalData) => {
      const result = [];
      for (let name in historicalData) {
        const volume = historicalData[name].chart.map((el: any) => {
          return [new Date(el.date).getTime(), el.volume];
        });
        const ohlc = historicalData[name].chart.map((el: any) => {
          //timestamp open high low close
          return [
            new Date(el.date).getTime(),
            el.open,
            el.high,
            el.low,
            el.close,
          ];
        });
        result.push({
          name,
          ohlc,
          volume,
        });
      }
      return result;
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchHistoricalPrices(action: any): any {
  try {
    const prices = yield getHistoricalPricesApi(action.payload);
    yield put({
      type: "GET_HISTORICAL_PRICES_SUCCESS",
      prices,
    });
  } catch (e) {
    yield put({ type: "GET_HISTORICAL_PRICES_FAILED", message: e.message });
  }
}

function* historicalPricesSaga() {
  console.log("hi");
  yield takeEvery("GET_HISTORICAL_PRICES_REQUESTED", fetchHistoricalPrices);
}

export default historicalPricesSaga;
