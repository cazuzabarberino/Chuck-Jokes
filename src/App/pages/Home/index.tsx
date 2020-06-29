import React, { useEffect } from "react";
import { Container, WelcomeMsg } from "./styles";
import JokeContainer from "../../components/JokeContainer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux";
import { fetchRandomJoke } from "../../../redux/Jokes/actions";

const Home: React.FC = () => {
  const { joke } = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomJoke());
  }, [dispatch]);

  return (
    <Container>
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
        <button>Explore Jokes</button>
      </WelcomeMsg>
      <JokeContainer joke={joke} />
    </Container>
  );
};

export default Home;
