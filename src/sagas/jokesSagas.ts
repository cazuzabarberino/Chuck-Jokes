import { call, put, takeLatest } from "redux-saga/effects";
import { getRandomJoke, getCategories } from "../services/chucknorrisApi";
import {
  setRandomJoke,
  setCategories,
  JokesActionType,
} from "../redux/Jokes/actions";

export const jokesWatchers = {
  watchFetchRandomJoke: function* () {
    yield takeLatest(JokesActionType.FETCH_RANDOM_JOKE, fetchRandomJoke);
  },

  watchFetchCategories: function* () {
    yield takeLatest(JokesActionType.FETCH_CATEGORIES, fetchCategories);
  },
};

export function* fetchRandomJoke() {
  const joke = yield call(() => getRandomJoke());
  yield put(setRandomJoke(joke));
}

export function* fetchCategories() {
  const categories = yield call(getCategories);
  yield put(setCategories(categories));
}
