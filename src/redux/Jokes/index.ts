import Joke from "../../models/Joke";
import { JokesActions, JokesActionType } from "./actions";

export interface JokesState {
  joke: Joke | null;
  category: string | null;
  favorites: string[];
  categories: string[] | null;
}

const initialState: JokesState = {
  joke: null,
  category: null,
  favorites: [],
  categories: null,
};

export const JokesReducer = (
  state = initialState,
  action: JokesActions
): JokesState => {
  switch (action.type) {
    case JokesActionType.FETCH_RANDOM_JOKE:
      return {
        ...state,
        joke: null,
      };
    case JokesActionType.SET_RANDOM_JOKE:
      return {
        ...state,
        joke: action.payload.joke,
      };
    case JokesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};
