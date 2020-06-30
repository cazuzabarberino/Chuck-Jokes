import { call, put, takeLatest } from "redux-saga/effects";
import {
  getRandomJoke,
  getJokeById,
  getCategories,
} from "../services/chucknorrisApi";
import {
  setJoke,
  setCategories,
  JokesActionType,
} from "../redux/Jokes/actions";

export const jokesWatchers = {
  watchFetchRandomJoke: function* () {
    yield takeLatest(JokesActionType.FETCH_RANDOM_JOKE, fetchRandomJoke);
  },

  watchFetchJokeById: function* () {
    yield takeLatest(JokesActionType.FETCH_JOKE_BY_ID, fetchJokeById);
  },

  watchFetchCategories: function* () {
    yield takeLatest(JokesActionType.FETCH_CATEGORIES, fetchCategories);
  },
};

export function* fetchRandomJoke() {
  const joke = yield call(getRandomJoke);
  yield put(setJoke(joke));
}

export function* fetchJokeById({
  payload: { id },
}: {
  type: JokesActionType.FETCH_JOKE_BY_ID;
  payload: { id: string };
}) {
  const joke = yield call(() => getJokeById(id));
  yield put(setJoke(joke));
}

export function* fetchCategories() {
  const categories = yield call(getCategories);
  yield put(setCategories(categories));
}
