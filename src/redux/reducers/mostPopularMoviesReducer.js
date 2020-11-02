import {
  MOST_POPULAR_MOVIE_START,
  MOST_POPULAR_MOVIE_COMPLETE,
  MOST_POPULAR_MOVIE_ERROR,
} from "../../consts/actionTypes";
// import { get } from "lodash";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR_MOVIE_START:
      return { ...state, isLoading: true, movieMostPopularResult: null };
    case MOST_POPULAR_MOVIE_COMPLETE:
      console.log("action complete", action);
      return {
        ...state,
        isLoading: false,
        movieMostPopularResult: action.results.data.results,
      };
    case MOST_POPULAR_MOVIE_ERROR:
      // console.log("action error", action);
      return { ...state, isLoading: false, movieMostPopularResult: null };
    default:
      return { ...state, isLoading: false };
  }
}
