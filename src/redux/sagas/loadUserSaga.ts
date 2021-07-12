import { call, put, takeEvery } from "redux-saga/effects";

export function loadUserAPI(token: any) {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/auth`, {
    method: "GET",
    headers: {
      Authorisation: token,
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw await response.json();
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error.message);
    });
}

export function* loadUser(action: any): any {
  try {
    const response = yield loadUserAPI(action.payload);
    yield put({
      type: "LOAD_USER_SUCCESS",
      payload: response,
    });
  } catch (e) {
    yield put({ type: "LOAD_USER_FAILED", message: e.message });
  }
}

function* loadUserSaga() {
  yield takeEvery("LOAD_USER_REQUESTED", loadUser);
}

export default loadUserSaga;
