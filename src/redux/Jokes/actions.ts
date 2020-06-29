import { JokesActions } from "./";
import Joke from "../../models/Joke";

export const fetchRandomJoke = (): JokesActions => ({
  type: "BEGIN_FETCH_RANDOM_JOKE",
});

export const endFecthRandomJoke = (joke: Joke): JokesActions => ({
  type: "END_FECTH_RANDOM_JOKE",
  payload: {
    joke,
  },
});
