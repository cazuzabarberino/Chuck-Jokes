import React, { useMemo } from "react";
import { Container, FavoriteFactsContainer } from "./styles";
import JokeContainer from "../../components/JokeContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.jokes.favorites);

  const mappedJokes = useMemo(
    () =>
      !favorites
        ? []
        : favorites.map((joke) => <JokeContainer joke={joke} showOptions />),
    [favorites]
  );

  return (
    <Container>
      <p>Your favorite Chuck facts.</p>
      <FavoriteFactsContainer>{mappedJokes}</FavoriteFactsContainer>
    </Container>
  );
};

export default Favorites;
