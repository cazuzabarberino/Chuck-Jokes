import React from "react";
import {
  Container,
  Quote,
  JokeText,
  Joke,
  JokeOptions,
  HorizontalLine,
} from "./styles";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaRegStar,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const JokeContainer: React.FC = () => {
  return (
    <Container>
      <Joke>
        <Quote>
          <FaQuoteLeft />
        </Quote>
        <JokeText>
          Every Easter, Chuck Norris like to celebrate by using his powers as a
          necromancer to resurrect Jesus Christ, then immediately roundhouse
          kick him to death again.
        </JokeText>
        <Quote>
          <FaQuoteRight />
        </Quote>
      </Joke>
      <HorizontalLine />
      <JokeOptions>
        <FaRegStar />
        <div>
          <FaFacebook />
          <FaWhatsapp />
          <FaTwitter />
          <FaInstagram />
        </div>
      </JokeOptions>
    </Container>
  );
};

export default JokeContainer;
