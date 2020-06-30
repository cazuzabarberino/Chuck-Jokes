import Joke from "../../models/Joke";
import { JokesActions, JokesActionType } from "./actions";

export interface JokesState {
  joke: Joke | null;
  favorites: Joke[] | null;
  categories: {
    selected: string[];
    unselected: string[];
  } | null;
}

const initialState: JokesState = {
  joke: null,
  favorites: null,
  categories: null,
};

export const JokesReducer = (
  state = initialState,
  action: JokesActions
): JokesState => {
  switch (action.type) {
    case JokesActionType.FETCH_JOKE_BY_ID:
    case JokesActionType.FETCH_RANDOM_JOKE:
      return {
        ...state,
        joke: null,
      };
    case JokesActionType.SET_JOKE:
      return {
        ...state,
        joke: action.payload.joke,
      };
    case JokesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: { unselected: action.payload.categories, selected: [] },
      };
    case JokesActionType.SELECT_CATEGORY:
      if (!state.categories) return state;
      {
        const { selected, unselected } = state.categories;
        const newSelected = unselected.splice(action.payload.index, 1);
        return {
          ...state,
          categories: {
            selected: [...selected, ...newSelected].sort(),
            unselected,
          },
        };
      }
    case JokesActionType.UNSELECT_CATEGORY:
      if (!state.categories) return state;
      {
        const { selected, unselected } = state.categories;
        const newUnselected = selected.splice(action.payload.index, 1);
        return {
          ...state,
          categories: {
            selected,
            unselected: [...unselected, ...newUnselected].sort(),
          },
        };
      }
    case JokesActionType.SELECT_ALL:
      if (!state.categories) return state;
      {
        const { selected, unselected } = state.categories;
        return {
          ...state,
          categories: {
            selected: [...selected, ...unselected].sort(),
            unselected: [],
          },
        };
      }
    case JokesActionType.UNSELECT_ALL:
      if (!state.categories) return state;
      {
        const { selected, unselected } = state.categories;
        return {
          ...state,
          categories: {
            selected: [],
            unselected: [...selected, ...unselected].sort(),
          },
        };
      }
    case JokesActionType.ADD_TO_FAVORITES:
      if (!state.favorites) return state;
      {
        const { favorites } = state;
        favorites.push(action.payload.joke);

        localStorage.setItem(
          "$Chuck-Jokes:Favorites",
          JSON.stringify(favorites)
        );

        return {
          ...state,
        };
      }
    case JokesActionType.REMOVE_FROM_FAVORITES:
      if (!state.favorites) return state;
      {
        const { favorites } = state;
        const newFavorites = favorites.filter(
          (joke) => joke.id !== action.payload.id
        );

        localStorage.setItem(
          "$Chuck-Jokes:Favorites",
          JSON.stringify(newFavorites)
        );

        return {
          ...state,
          favorites: newFavorites,
        };
      }
    case JokesActionType.LOAD_FAVORITES:
      const storegedFavorites = localStorage.getItem("$Chuck-Jokes:Favorites");
      if (storegedFavorites) {
        return {
          ...state,
          favorites: JSON.parse(storegedFavorites),
        };
      }
      return {
        ...state,
        favorites: [],
      };
    default:
      return state;
  }
};
