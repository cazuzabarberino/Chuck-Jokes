import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  FaFacebook,
  FaQuoteLeft,
  FaQuoteRight,
  FaReddit,
  FaRegStar,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Joke from "../../../models/Joke";
import {
  fetchRandomJoke,
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/Jokes/actions";
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
import { RootState } from "../../../redux";

interface Props {
  joke: Joke | null;
  canNavigate?: boolean;
  showOptions?: boolean;
  canClick?: boolean;
}

const JokeContainer: React.FC<Props> = ({
  canClick,
  showOptions,
  canNavigate,
  joke,
}) => {
  const favorites = useSelector((state: RootState) => state.jokes.favorites);
  const dispatch = useDispatch();
  const JokeTextRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(48);
  const [isFavorite, setIsFavorite] = useState(false);
  const getNewJoke = useCallback(() => dispatch(fetchRandomJoke()), [dispatch]);

  useEffect(() => {
    if (joke && favorites) {
      const result = favorites.find(
        (favoriteJoke) => favoriteJoke.id === joke.id
      );
      setIsFavorite(!!result);
    } else {
      setIsFavorite(false);
    }
  }, [joke, favorites]);

  useLayoutEffect(() => {
    setHeight(
      joke ? JokeTextRef.current?.getBoundingClientRect().height || 48 : 48
    );
  }, [joke, setHeight]);

  const toggleFavorite = useCallback(() => {
    if (!joke) return;
    dispatch(isFavorite ? removeFromFavorites(joke.id) : addToFavorites(joke));
    setIsFavorite((state) => !state);
  }, [joke, isFavorite, dispatch]);

  return (
    <Container>
      <JokeWrapper>
        <JokeArea>
          <Quote>
            <FaQuoteLeft />
          </Quote>
          <JokeView onClick={getNewJoke} disabled={!canClick} height={height}>
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
              <button onClick={toggleFavorite}>
                {isFavorite ? <FaStar /> : <FaRegStar />}
              </button>
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
