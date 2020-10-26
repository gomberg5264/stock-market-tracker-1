import { all } from 'redux-saga/effects'
import intradayPricesSaga from "./intradayPricesSaga";

export default function* rootSaga() {
  yield all([intradayPricesSaga()]);
}
