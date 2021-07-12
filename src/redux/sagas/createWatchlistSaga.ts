import { call, put, takeEvery } from "redux-saga/effects";

export function createWatchlistAPI(data: any) {
  return fetch("http://localhost:5000/user/add-watchlist", {
    method: "POST",
    headers: {
      Authorisation: data.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newWatchList: {
        name: data.watchlistName,
        symbols: [],
      },
    }),
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

export function* createWatchlist(action: any): any {
  try {
    const response = yield createWatchlistAPI(action.payload);

    yield put({
      type: "CREATE_WATCHLIST_SUCCESS",
      payload: response,
    });
  } catch (e) {
    yield put({ type: "CREATE_WATCHLIST_FAILED", message: e.message });
  }
}

function* createWatchlistSaga() {
  yield takeEvery("CREATE_WATCHLIST_REQUESTED", createWatchlist);
}

export default createWatchlistSaga;
