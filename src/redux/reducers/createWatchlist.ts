import {
    CreateWatchlistTypes,
    CREATE_WATCHLIST_REQUESTED,
    CREATE_WATCHLIST_SUCCESS,
    CREATE_WATCHLIST_FAILED,
  } from "./types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    loading: true,
    error: null,
  };
  
  export default function createWatchlist(state = initialState, action: CreateWatchlistTypes) {
    switch (action.type) {
      case CREATE_WATCHLIST_REQUESTED:
        return {
          ...state,
          loading: true,
        };
      case CREATE_WATCHLIST_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case CREATE_WATCHLIST_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        };
      default:
        return state;
    }
  }
  