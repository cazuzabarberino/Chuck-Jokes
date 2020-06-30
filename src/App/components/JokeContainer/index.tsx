import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaQuoteLeft,
  FaQuoteRight,
  FaReddit,
  FaRegStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Joke from "../../../models/Joke";
import { fetchRandomJoke } from "../../../redux/Jokes/actions";
import {
  Container,
  HorizontalLine,
  JokeArea,
  JokeOptions,
  JokeText,
  JokeView,
  JokeWrapper,
  Loading,
  NavigationButtons,
  Quote,
} from "./styles";

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
                <FacebookShareButton url={window.location.href}>
                  <FaFacebook />
                </FacebookShareButton>
                <WhatsappShareButton url={window.location.href}>
                  <FaWhatsapp />
                </WhatsappShareButton>
                <TwitterShareButton url={window.location.href}>
                  <FaTwitter />
                </TwitterShareButton>
                <RedditShareButton url={window.location.href}>
                  <FaReddit />
                </RedditShareButton>
              </div>
            </JokeOptions>
          </>
        )}
      </JokeWrapper>
      {canNavigate && (
        <NavigationButtons onClick={getNewJoke}>Next Joke</NavigationButtons>
      )}
    </Container>
  );
};

export default JokeContainer;
