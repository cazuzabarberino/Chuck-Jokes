import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  max-width: 900px;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
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
    width: 24px;
    height: 24px;
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
