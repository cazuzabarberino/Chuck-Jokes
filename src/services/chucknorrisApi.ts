import axios from "axios";
import Joke from "../models/Joke";
import { store } from "../redux";

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});

export const getRandomJoke = async (): Promise<Joke> => {
  try {
    let categoriesToGet = "";
    const categories = store.getState().jokes.categories;
    if (categories) {
      categoriesToGet = categories.selected.join(",");
      if (categoriesToGet) categoriesToGet = "?category=" + categoriesToGet;
    }

    const response = await api.get<Joke>(`random${categoriesToGet}`);
    return response.data;
  } catch (err) {
    alert("Server problems, please try again later.");
    return {} as Joke;
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await api.get<string[]>("categories");
    return response.data;
  } catch (err) {
    return [];
  }
};
