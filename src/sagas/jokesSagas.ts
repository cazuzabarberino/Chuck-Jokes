import { call, put, takeEvery } from "redux-saga/effects";
import { getRandomJoke } from "../services/chucknorrisApi";
import { endFecthRandomJoke } from "../redux/Jokes/actions";

export const jokesWatchers = {
  watchFetchRandomJoke: function* () {
    yield takeEvery("BEGIN_FETCH_RANDOM_JOKE", fetchRandomJoke);
  },
};

export function* fetchRandomJoke() {
  const joke = yield call(getRandomJoke);
  yield put(endFecthRandomJoke(joke));
}
