import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: 900px;
  margin: 16px;
`;

export const CategoryArea = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 4px solid ${({ theme }) => theme.font};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  padding: 16px 8px 8px 8px;

  p {
    border-radius: 8px;
    position: absolute;
    bottom: 100%;
    left: 16px;
    font-weight: bold;
    padding: 0 8px;
    font-size: 24px;
    background: ${({ theme }) => theme.primary};
    transform: translateY(40%);
  }
`;

interface CategoryBtnProps {
  selected?: boolean;
}

export const CategoryBtn = styled.button<CategoryBtnProps>`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 24px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 4px 8px;
  margin: 4px;
  transition: color 0.2s, background 0.2s;

  ${({ selected, theme }) =>
    selected
      ? css`
          background: ${theme.secondary};
          color: ${theme.primary};

          :hover {
            background: ${shade(0.2, theme.secondary)};
            border-color: ${shade(0.2, theme.secondary)};
          }
        `
      : css`
          :hover {
            background: ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.primary};
          }
        `}
`;

export const CategoryOptions = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0 0 8px 8px;
  overflow: hidden;

  button {
    flex: 1;
    width: 100%;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.secondary};
    font-size: 16px;
    padding: 8px 0;
    transition: color 0.2s, background 0.2s;

    :hover {
      background: ${({ theme }) => shade(0.2, theme.secondary)};
      border-color: ${({ theme }) => shade(0.2, theme.secondary)};
    }

    :first-of-type {
      color: ${({ theme }) => theme.secondary};
      background: ${({ theme }) => theme.primary};
      border-bottom-left-radius: 8px;

      :hover {
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.secondary};
      }
    }

    + button {
      margin-left: 4px;
    }
  }
`;
