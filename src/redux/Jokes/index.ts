import Joke from "../../models/Joke";
import { JokesActions, JokesActionType } from "./actions";

export interface JokesState {
  joke: Joke | null;
  favorites: string[];
  categories: {
    selected: string[];
    unselected: string[];
  } | null;
}

const initialState: JokesState = {
  joke: null,
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
        categories: { selected: action.payload.categories, unselected: [] },
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
    default:
      return state;
  }
};
