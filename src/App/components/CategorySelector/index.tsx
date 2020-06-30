import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchCategories } from "../../../redux/Jokes/actions";
import { CategoryBtn, Container } from "./styles";

const CategorySelector: React.FC = () => {
  const categories = useSelector((state: RootState) => state.jokes.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategories());
    }
  }, [categories, dispatch]);

  const mappedCategories = useMemo(() => {
    return !categories
      ? []
      : categories.map((category) => (
          <CategoryBtn key={category}>{category}</CategoryBtn>
        ));
  }, [categories]);

  return <Container>{mappedCategories}</Container>;
};
export default CategorySelector;
