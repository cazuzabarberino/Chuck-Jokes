import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router";
import { RootState } from "../../../redux";
import { fetchJokeById, fetchRandomJoke } from "../../../redux/Jokes/actions";
import CategorySelector from "../../components/CategorySelector";
import JokeContainer from "../../components/JokeContainer";
import { Container } from "./styles";
import { routes } from "../../router";

const Explore: React.FC<RouteComponentProps<{ jokeid: string }>> = ({
  match,
}) => {
  const { joke } = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch();
  const { push, replace } = useHistory();
  const previousIdRef = useRef("");
  const mountRef = useRef(false);

  useEffect(() => {
    if (match.params.jokeid && match.params.jokeid !== previousIdRef.current) {
      dispatch(fetchJokeById(match.params.jokeid));
    }
  }, [match.params.jokeid, dispatch]);

  useEffect(() => {
    if (mountRef.current && joke && joke.id !== previousIdRef.current) {
      previousIdRef.current = joke.id;
      const path = routes.explore + `/${joke.id}`;
      if (match.params.jokeid) push(path);
      else replace(path);
    }
  }, [joke, match.params.jokeid, push, replace]);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      if (!match.params.jokeid) dispatch(fetchRandomJoke());
    }
  }, [joke, dispatch, match.params.jokeid]);

  return (
    <Container>
      <JokeContainer joke={joke} canNavigate showOptions />
      <CategorySelector />
    </Container>
  );
};

export default Explore;
