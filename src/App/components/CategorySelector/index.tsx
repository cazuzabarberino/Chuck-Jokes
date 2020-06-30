import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import {
  fetchCategories,
  selectCategory,
  unselectCategory,
  selectAll,
  unselectAll,
} from "../../../redux/Jokes/actions";
import {
  CategoryArea,
  CategoryBtn,
  Container,
  CategoryOptions,
} from "./styles";

const CategorySelector: React.FC = () => {
  const categories = useSelector((state: RootState) => state.jokes.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategories());
    }
  }, [categories, dispatch]);

  const handleSelectAll = useCallback(() => dispatch(selectAll()), [dispatch]);
  const handleUnselectAll = useCallback(() => dispatch(unselectAll()), [
    dispatch,
  ]);

  const mappedCategories = useMemo(() => {
    return !categories
      ? []
      : [
          ...categories.selected.map((category, i) => (
            <CategoryBtn
              key={category}
              onClick={() => dispatch(unselectCategory(i))}
              selected
            >
              {category}
            </CategoryBtn>
          )),
          ...categories.unselected.map((category, i) => (
            <CategoryBtn
              key={category}
              onClick={() => dispatch(selectCategory(i))}
            >
              {category}
            </CategoryBtn>
          )),
        ];
  }, [categories, dispatch]);

  return (
    <Container>
      {categories && (
        <>
          <CategoryArea>
            <p>Categories</p>
            {mappedCategories}
          </CategoryArea>
          <CategoryOptions
            hideSelectAll={!!categories && categories.unselected.length === 0}
            hideUnselectAll={!!categories && categories.selected.length === 0}
          >
            <button onClick={handleUnselectAll}>Unselect All</button>
            <button onClick={handleSelectAll}>Select All</button>
          </CategoryOptions>
        </>
      )}
    </Container>
  );
};
export default CategorySelector;
