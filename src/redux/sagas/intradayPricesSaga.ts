import { call, put, takeEvery } from "redux-saga/effects";

export function getIntradayPrices() {
  return fetch(
    `${process.env.REACT_APP_SANDBOX_BASE_URL}stable/stock/market/batch?symbols=mcd,coke,fb,race,msft,dg&types=intraday-prices&token=${process.env.REACT_APP_SANDBOX_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const currentPricesList = [];
      const intradayResult = [];
      for (let name in data) {
        const priceAndTimestamp = data[name]["intraday-prices"].map(
          (price: any) => {
            return [
              new Date(`${price.date} ${price.minute}`).getTime(),
              price.close,
            ];
          }
        );
        intradayResult.push({
          name,
          data: priceAndTimestamp,
        });
        currentPricesList.push(
          priceAndTimestamp[priceAndTimestamp.length - 1][1]
        );
      }
      return [intradayResult, currentPricesList];
    })
    .catch((error) => {
      throw error;
    });
}

export function* fetchIntradayPrices() {
  try {
    const prices = yield call(getIntradayPrices);
    yield put({
      type: "GET_INTRADAY_PRICES_SUCCESS",
      prices,
    });
  } catch (e) {
    yield put({ type: "GET_INTRADAY_PRICES_FAILED", message: e.message });
  }
}

function* intradayPricesSaga() {
  yield takeEvery("GET_INTRADAY_PRICES_REQUESTED", fetchIntradayPrices);
}

export default intradayPricesSaga;
