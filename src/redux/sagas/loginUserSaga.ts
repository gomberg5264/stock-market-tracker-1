import { call, put, takeEvery } from "redux-saga/effects";

export function loginUserAPI(user: any) {
  return fetch("http://localhost:5000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
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
      console.log(error.message)
      throw Error(error.message);
    });
}

export function* loginUser(action: any): any {
  try {
    const response = yield loginUserAPI(action.payload);
    console.log(response);
    yield put({
      type: "LOGIN_USER_SUCCESS",
      payload: response,
    });
    yield put({
      type: "LOAD_USER_SUCCESS",
      payload: response,
    });
  } catch (e) {
    yield put({ type: "LOGIN_USER_FAILED", message: e.message });
  }
}

function* loginUserSaga() {
  yield takeEvery("LOGIN_USER_REQUESTED", loginUser);
}

export default loginUserSaga;
