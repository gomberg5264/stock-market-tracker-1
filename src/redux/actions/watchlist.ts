import * as type from "../reducers/types";

type CreatewWatchlistType = {
  watchlistName: string;
  token: string;
};

export function createWatchlist(data: CreatewWatchlistType): any {
  return {
    type: type.CREATE_WATCHLIST_REQUESTED,
    payload: data,
  };
}
