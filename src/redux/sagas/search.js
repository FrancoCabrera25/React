import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
} from "../../consts/actionTypes";
import { apiCall } from "../api/index";

export function* searchMovies({ payload }) {
  try {
    console.log("accon llamada");
    console.log("pay", payload);
    const results = yield call(
      apiCall,
      `Search/k_Y4gF9316/${payload}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_ERROR, error });
  }
}
export function* searchMoviesById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `Title/k_Y4gF9316/${payload}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, movie });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovies);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMoviesById);
}
