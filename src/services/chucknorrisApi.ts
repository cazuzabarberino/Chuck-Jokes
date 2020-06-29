import axios from "axios";
import Joke from "../models/Joke";

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});

export const getRandomJoke = async (): Promise<Joke> => {
  try {
    const response = await api.get<Joke>("random");
    return response.data;
  } catch (err) {
    alert("Server problems, please try again later.");
    return {} as Joke;
  }
};
