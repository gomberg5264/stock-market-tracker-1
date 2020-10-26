import { call, put, takeEvery } from "redux-saga/effects";

let volColours = {
  AAPL: "#ED2B88",
  GOOG: "#31AFD6",
  MSFT: "#F5A623",
  TSLA: "#9933CC",
};
export function getHistoricalData() {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=aapl,goog,msft,tsla&types=chart&range=6m&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((historicalData) => {
      const result = [];
      for (let name in historicalData) {
        const volumeColour = (volColours as any)[name];
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
          volumeColour,
        });
      }
      return result;
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchHistoricalData() {
  try {
    const data = yield call(getHistoricalData);
    yield put({
      type: "GET_HISTORICAL_DATA_SUCCESS",
      data,
    });
  } catch (e) {
    yield put({ type: "GET_HISTORICAL_DATA_FAILED", message: e.message });
  }
}

function* historicalDataSaga() {
  yield takeEvery("GET_HISTORICAL_DATA_REQUESTED", fetchHistoricalData);
}

export default historicalDataSaga;
