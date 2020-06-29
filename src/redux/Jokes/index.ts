import Joke from "../../models/Joke";

export interface JokesState {
  joke: Joke | null;
  category: string | null;
  favorites: string[];
}

export type JokesActions =
  | {
      type: "BEGIN_FETCH_RANDOM_JOKE";
    }
  | {
      type: "END_FECTH_RANDOM_JOKE";
      payload: {
        joke: Joke;
      };
    }
  | {
      type: "ADD_TO_FAVORITES";
      payload: {
        id: string;
      };
    }
  | {
      type: "REMOVE_FROM_FAVORITES";
      payload: {
        id: string;
      };
    };

const initialState: JokesState = {
  joke: null,
  category: null,
  favorites: [],
};

export const JokesReducer = (
  state = initialState,
  action: JokesActions
): JokesState => {
  switch (action.type) {
    case "END_FECTH_RANDOM_JOKE":
      return {
        ...state,
        joke: action.payload.joke,
      };
    default:
      return state;
  }
};
