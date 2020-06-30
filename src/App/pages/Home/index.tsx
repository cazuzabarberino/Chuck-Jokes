import React, { useEffect, useCallback } from "react";
import { Container, WelcomeMsg } from "./styles";
import JokeContainer from "../../components/JokeContainer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux";
import { fetchRandomJoke } from "../../../redux/Jokes/actions";
import { useHistory } from "react-router";
import { routes } from "../../router";

const Home: React.FC = () => {
  const { joke } = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(fetchRandomJoke());
    const interval = setInterval(() => {
      dispatch(fetchRandomJoke());
    }, 8000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const goToExplore = useCallback(() => push(routes.explore), [push]);

  return (
    <Container>
      <JokeContainer joke={joke} />
      <WelcomeMsg>
        <p>
          Welcome to
          <br />
          <span>Chuck Jokes!</span>
          <br />A Chuck Norris facts explorer powered by{" "}
          <a
            href="https://api.chucknorris.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chucknorris.io
          </a>
          .
        </p>
        <button onClick={goToExplore}>Explore Jokes</button>
      </WelcomeMsg>
    </Container>
  );
};

export default Home;
