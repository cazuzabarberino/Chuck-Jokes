import Joke from "../../models/Joke";

export enum JokesActionType {
  FETCH_RANDOM_JOKE = "FETCH_RANDOM_JOKE",
  FETCH_JOKE_BY_ID = "FETCH_JOKE_BY_ID",
  SET_JOKE = "SET_JOKE",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  SET_CATEGORIES = "SET_CATEGORIES",
  SELECT_CATEGORY = "SELECT_CATEGORY",
  UNSELECT_CATEGORY = "UNSELECT_CATEGORY",
  SELECT_ALL = "SELECT_ALL",
  UNSELECT_ALL = "UNSELECT_ALL",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
  LOAD_FAVORITES = "LOAD_FAVORITES",
}

export type JokesActions =
  | {
      type: JokesActionType.FETCH_RANDOM_JOKE;
    }
  | {
      type: JokesActionType.FETCH_JOKE_BY_ID;
      payload: {
        id: string;
      };
    }
  | {
      type: JokesActionType.SET_JOKE;
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
    }
  | {
      type: JokesActionType.ADD_TO_FAVORITES;
      payload: {
        joke: Joke;
      };
    }
  | {
      type: JokesActionType.REMOVE_FROM_FAVORITES;
      payload: {
        id: string;
      };
    }
  | {
      type: JokesActionType.LOAD_FAVORITES;
    };

export const fetchRandomJoke = (): JokesActions => ({
  type: JokesActionType.FETCH_RANDOM_JOKE,
});

export const fetchJokeById = (id: string): JokesActions => ({
  type: JokesActionType.FETCH_JOKE_BY_ID,
  payload: {
    id,
  },
});

export const setJoke = (joke: Joke): JokesActions => ({
  type: JokesActionType.SET_JOKE,
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

export const addToFavorites = (joke: Joke): JokesActions => ({
  type: JokesActionType.ADD_TO_FAVORITES,
  payload: {
    joke,
  },
});

export const removeFromFavorites = (id: string): JokesActions => ({
  type: JokesActionType.REMOVE_FROM_FAVORITES,
  payload: {
    id,
  },
});

export const loadFavorites = (): JokesActions => ({
  type: JokesActionType.LOAD_FAVORITES,
});
