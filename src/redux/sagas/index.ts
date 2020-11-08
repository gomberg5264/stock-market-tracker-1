import { all } from 'redux-saga/effects'
import intradayPricesSaga from "./intradayPricesSaga";
import quoteSaga from "./quoteSaga";
import historicaldataSaga from "./historicalDataSaga";

export default function* rootSaga() {
  yield all([intradayPricesSaga(), quoteSaga(), historicaldataSaga()]);
}
