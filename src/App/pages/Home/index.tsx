import React from "react";
import { Container, WelcomeMsg } from "./styles";
import JokeContainer from "../../components/JokeContainer";

const Home: React.FC = () => {
  return (
    <Container>
      <WelcomeMsg>
        {/* <div /> */}
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
      <JokeContainer />
    </Container>
  );
};

export default Home;
