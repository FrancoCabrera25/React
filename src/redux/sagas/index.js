import { all } from "redux-saga/effects";

import search from "./search";
import searchMostPopular from "./searchMostPopularMovie";

export default function* rootSaga() {
  yield all([search(), searchMostPopular()]);
}
