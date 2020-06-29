import React, { useCallback } from "react";
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
  Loading,
} from "./styles";
import Joke from "../../../models/Joke";
import { useDispatch } from "react-redux";
import { fetchRandomJoke } from "../../../redux/Jokes/actions";

interface Props {
  joke: Joke | null;
  canNavigate?: boolean;
  showOptions?: boolean;
}

const JokeContainer: React.FC<Props> = ({ showOptions, canNavigate, joke }) => {
  const dispatch = useDispatch();

  const getNewJoke = useCallback(() => dispatch(fetchRandomJoke()), [dispatch]);

  return (
    <Container>
      <JokeWrapper>
        <JokeArea>
          <Quote>
            <FaQuoteLeft />
          </Quote>
          {joke ? (
            <JokeText>{joke.value}</JokeText>
          ) : (
            <Loading>
              <div />
              <div />
              <div />
            </Loading>
          )}
          <Quote>
            <FaQuoteRight />
          </Quote>
        </JokeArea>
        {showOptions && (
          <>
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
          </>
        )}
      </JokeWrapper>
      {canNavigate && (
        <>
          <NavigationButtons>
            <IoIosArrowBack />
          </NavigationButtons>
          <NavigationButtons onClick={getNewJoke}>
            <IoIosArrowForward />
          </NavigationButtons>
        </>
      )}
    </Container>
  );
};

export default JokeContainer;
