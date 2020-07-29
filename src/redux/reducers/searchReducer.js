import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
} from "../../consts/actionTypes";
// import { get } from "lodash";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true, movieResults: null };
    case SEARCH_MOVIE_COMPLETE:
      console.log("action complete", action);
      return {
        ...state,
        isLoading: false,
        movieResults: action.results.data.results,
      };
    case SEARCH_MOVIE_ERROR:
      // console.log("action error", action);
      return { ...state, isLoading: false, movieResults: null };
    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
    case SEARCH_MOVIE_BY_ID_COMPLETE:
      // console.log("action complete", action.movie.data);
      return {
        ...state,
        isLoading: false,
        movieResult: action.movie.data,
      };
    case SEARCH_MOVIE_BY_ID_ERROR:
      // console.log("action error", action);
      return { ...state, isLoading: false, movieResult: null };
    default:
      return { ...state, isLoading: false };
  }
}
