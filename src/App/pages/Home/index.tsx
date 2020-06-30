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
    window.scrollTo(0, 0);
    dispatch(fetchRandomJoke());
  }, [dispatch]);

  const goToExplore = useCallback(() => push(routes.explore), [push]);

  return (
    <Container>
      <WelcomeMsg>
        <p>
          Welcome to
          <br />
          <span>Chuck Jokes!</span>
        </p>
        <p>
          A Chuck Norris facts explorer powered by{" "}
          <a
            href="https://api.chucknorris.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chucknorris.io
          </a>
          .
        </p>
      </WelcomeMsg>
      <JokeContainer joke={joke} canClick />
      <WelcomeMsg>
        <button onClick={goToExplore}>Explore Jokes</button>
      </WelcomeMsg>
    </Container>
  );
};

export default Home;
