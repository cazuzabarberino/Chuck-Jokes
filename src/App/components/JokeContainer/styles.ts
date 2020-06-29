import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: 900px;
  border-radius: 8px;
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4px;
  overflow: hidden;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const JokeWrapper = styled.div`
  padding: 16px;
  grid-column: 1/3;
`;

export const NavigationButtons = styled.div`
  background: ${({ theme }) => theme.secondary};
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: ${({ theme }) => shade(0.2, theme.secondary)};
  }

  > svg {
    color: ${({ theme }) => theme.primary};
    width: 48px;
    height: 48px;
  }
`;

export const HorizontalLine = styled.div`
  height: 2px;
  border-radius: 2px;
  width: 100%;
  background: ${({ theme }) => theme.secondary};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Joke = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  column-gap: 16px;
`;

export const Quote = styled.div`
  :first-child {
    align-self: flex-start;
  }

  :last-child {
    align-self: flex-end;
  }

  svg {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const JokeText = styled.p`
  font-size: 24px;
  text-align: justify;
`;

export const JokeOptions = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    width: 32px;
    height: 32px;
    transition: 0.2s;

    :hover {
      color: ${({ theme }) => theme.secondary};
      transform: scale(1.1);
    }

    + svg {
      margin-left: 8px;
    }
  }
`;
