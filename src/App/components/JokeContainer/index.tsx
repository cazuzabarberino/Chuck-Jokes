import React, { useCallback, useRef, useLayoutEffect, useState } from "react";
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
  JokeView,
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
  const JokeTextRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(32);
  const getNewJoke = useCallback(() => dispatch(fetchRandomJoke()), [dispatch]);

  useLayoutEffect(() => {
    setHeight(
      joke ? JokeTextRef.current?.getBoundingClientRect().height || 32 : 32
    );
  }, [joke, setHeight]);

  return (
    <Container>
      <JokeWrapper>
        <JokeArea>
          <Quote>
            <FaQuoteLeft />
          </Quote>
          <JokeView height={height}>
            {joke ? (
              <JokeText ref={JokeTextRef}>{joke.value}</JokeText>
            ) : (
              <Loading>
                <div />
                <div />
                <div />
              </Loading>
            )}
          </JokeView>

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
