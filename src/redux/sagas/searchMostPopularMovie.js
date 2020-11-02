import { put, call, takeLatest } from "redux-saga/effects";
import {
  MOST_POPULAR_MOVIE_START,
  MOST_POPULAR_MOVIE_COMPLETE,
  MOST_POPULAR_MOVIE_ERROR,
} from "../../consts/actionTypes";
import { apiCall } from "../api/index";

export function* searchMostPopularMovies() {
  try {
    console.log("accion most popular llamada");
    // console.log("pay", payload);
    const results = yield call(
      apiCall,
      `MostPopularMovies/k_Y4gF9316/`,
      null,
      null,
      "GET"
    );
    yield put({ type: MOST_POPULAR_MOVIE_COMPLETE, results });
  } catch (error) {
    yield put({ type: MOST_POPULAR_MOVIE_ERROR, error });
  }
}

export default function* searchMostPopular() {
  yield takeLatest(MOST_POPULAR_MOVIE_START, searchMostPopularMovies);
  //   yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMoviesById);
}
