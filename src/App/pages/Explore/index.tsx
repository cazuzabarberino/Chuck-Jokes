import React, { useEffect } from "react";
import { Container } from "./styles";
import JokeContainer from "../../components/JokeContainer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux";
import { fetchRandomJoke } from "../../../redux/Jokes/actions";
import CategorySelector from "../../components/CategorySelector";

const Explore: React.FC = () => {
  const { joke } = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!joke) dispatch(fetchRandomJoke());
  }, [dispatch, joke]);

  return (
    <Container>
      <JokeContainer joke={joke} canNavigate showOptions />
      <CategorySelector />
    </Container>
  );
};

export default Explore;
