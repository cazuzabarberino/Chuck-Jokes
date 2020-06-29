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
  JokeArea,
  JokeOptions,
  JokeText,
  JokeWrapper,
  NavigationButtons,
  Quote,
} from "./styles";
import Joke from "../../../models/Joke";

interface Props {
  joke: Joke | null;
}

const JokeContainer: React.FC<Props> = ({ joke }) => {
  return (
    <Container>
      <JokeWrapper>
        <JokeArea>
          <Quote>
            <FaQuoteLeft />
          </Quote>
          <JokeText>{joke && joke.value}</JokeText>
          <Quote>
            <FaQuoteRight />
          </Quote>
        </JokeArea>
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
