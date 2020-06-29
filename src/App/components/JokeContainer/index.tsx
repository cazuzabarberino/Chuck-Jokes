import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
  FaRegStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Container,
  HorizontalLine,
  Joke,
  JokeOptions,
  JokeText,
  JokeWrapper,
  NavigationButtons,
  Quote,
} from "./styles";

const JokeContainer: React.FC = () => {
  return (
    <Container>
      <JokeWrapper>
        <Joke>
          <Quote>
            <FaQuoteLeft />
          </Quote>
          <JokeText>
            Every Easter, Chuck Norris like to celebrate by using his powers as
            a necromancer to resurrect Jesus Christ, then immediately roundhouse
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
      </JokeWrapper>
      <NavigationButtons>
        <IoIosArrowBack />
      </NavigationButtons>
      <NavigationButtons>
        <IoIosArrowForward />
      </NavigationButtons>
    </Container>
  );
};

export default JokeContainer;
