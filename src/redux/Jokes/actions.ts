import Joke from "../../models/Joke";

export enum JokesActionType {
  FETCH_RANDOM_JOKE = "FETCH_RANDOM_JOKE",
  SET_RANDOM_JOKE = "SET_RANDOM_JOKE",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  SET_CATEGORIES = "SET_CATEGORIES",
  SELECT_CATEGORY = "SELECT_CATEGORY",
  UNSELECT_CATEGORY = "UNSELECT_CATEGORY",
  SELECT_ALL = "SELECT_ALL",
  UNSELECT_ALL = "UNSELECT_ALL",
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
      type: JokesActionType.SELECT_CATEGORY;
      payload: {
        index: number;
      };
    }
  | {
      type: JokesActionType.UNSELECT_CATEGORY;
      payload: {
        index: number;
      };
    }
  | {
      type: JokesActionType.SELECT_ALL;
    }
  | {
      type: JokesActionType.UNSELECT_ALL;
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

export const selectCategory = (index: number): JokesActions => ({
  type: JokesActionType.SELECT_CATEGORY,
  payload: {
    index,
  },
});

export const unselectCategory = (index: number): JokesActions => ({
  type: JokesActionType.UNSELECT_CATEGORY,
  payload: {
    index,
  },
});

export const selectAll = (): JokesActions => ({
  type: JokesActionType.SELECT_ALL,
});
export const unselectAll = (): JokesActions => ({
  type: JokesActionType.UNSELECT_ALL,
});
