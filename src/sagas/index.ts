import { jokesWatchers } from "./jokesSagas";
import { all, fork } from "redux-saga/effects";

const mySagas = function* root() {
  yield all(Object.values(jokesWatchers).map(fork));
};

export default mySagas;
