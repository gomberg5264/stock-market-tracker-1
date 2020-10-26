import { all } from 'redux-saga/effects'
import intradayPricesSaga from "./intradayPricesSaga";
import yesterdayClosePricesSaga from "./yesterdayClosePricesSaga";
import historicaldataSaga from "./historicalDataSaga";

export default function* rootSaga() {
  yield all([intradayPricesSaga(), yesterdayClosePricesSaga(), historicaldataSaga()]);
}
