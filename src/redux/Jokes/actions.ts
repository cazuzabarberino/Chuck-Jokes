import Joke from "../../models/Joke";

export enum JokesActionType {
  FETCH_RANDOM_JOKE = "FETCH_RANDOM_JOKE",
  SET_RANDOM_JOKE = "SET_RANDOM_JOKE",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  SET_CATEGORIES = "SET_CATEGORIES",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
}

export type JokesActions =
  | {
      type: JokesActionType.FETCH_RANDOM_JOKE;
    }
  | {
      type: JokesActionType.SET_RANDOM_JOKE;
      payload: {
        joke: Joke;
      };
    }
  | {
      type: JokesActionType.FETCH_CATEGORIES;
    }
  | {
      type: JokesActionType.SET_CATEGORIES;
      payload: {
        categories: string[];
      };
    }
  | {
      type: JokesActionType.ADD_TO_FAVORITES;
      payload: {
        id: string;
      };
    }
  | {
      type: JokesActionType.REMOVE_FROM_FAVORITES;
      payload: {
        id: string;
      };
    };

export const fetchRandomJoke = (): JokesActions => ({
  type: JokesActionType.FETCH_RANDOM_JOKE,
});

export const setRandomJoke = (joke: Joke): JokesActions => ({
  type: JokesActionType.SET_RANDOM_JOKE,
  payload: {
    joke,
  },
});

export const fetchCategories = (): JokesActions => ({
  type: JokesActionType.FETCH_CATEGORIES,
});

export const setCategories = (categories: string[]): JokesActions => ({
  type: JokesActionType.SET_CATEGORIES,
  payload: {
    categories,
  },
});
