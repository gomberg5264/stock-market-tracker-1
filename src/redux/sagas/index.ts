import { all } from "redux-saga/effects";
import registerSaga from "./registerUserSaga";
import loginSaga from "./loginUserSaga";
import loadUserSaga from "./loadUserSaga";
import intradayPricesSaga from "./intradayPricesSaga";

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    loadUserSaga(),
    intradayPricesSaga(),
  ]);
}
