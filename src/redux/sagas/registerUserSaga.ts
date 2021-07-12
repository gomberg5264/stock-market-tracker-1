import { call, put, takeEvery } from "redux-saga/effects";

export function registerUserApi(newUser: any) {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw await response.json();
      }
      return response;
    })
    .catch((error) => {
      throw Error(error.message);
    });
}

export function* registerUser(action: any): any {
  try {
    yield registerUserApi(action.data);

    yield put({
      type: "REGISTER_USER_SUCCESS",
    });
  } catch (e) {
    yield put({
      type: "REGISTER_USER_FAILED",
      message: e.message,
    });
  }
}

function* registerUserSaga() {
  yield takeEvery("REGISTER_USER_REQUESTED", registerUser);
}

export default registerUserSaga;
