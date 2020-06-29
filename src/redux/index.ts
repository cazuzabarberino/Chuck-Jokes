import { createStore, applyMiddleware, combineReducers } from "redux";
import { JokesState, JokesReducer } from "./Jokes";
import createSagaMiddleware from "redux-saga";
import mySagas from "../sagas";

export interface RootState {
  jokes: JokesState;
}

const reducers = combineReducers<RootState>({ jokes: JokesReducer });
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySagas);
