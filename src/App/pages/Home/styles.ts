import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    width: 100%;
  }
`;

export const WelcomeMsg = styled.div`
  position: relative;
  flex: 1;
  margin: 16px;
  width: calc(100% - 32px);
  max-width: 900px;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > p {
    position: relative;
    z-index: 2;
    padding: 16px;
    font-size: 32px;
    text-align: center;

    > span {
      font-size: 96px;
      font-family: "Pangolin", cursive;
    }

    > a {
      color: ${({ theme }) => theme.font};
    }
  }

  > button {
    position: relative;
    z-index: 2;
    font-size: 32px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 8px;
    padding: 8px 32px;
    transition: background 0.2s;
    align-self: flex-start;
    @media (hover: hover) and (pointer: fine) {
      :hover {
        background: ${({ theme }) => shade(0.2, theme.secondary)};
      }
    }
  }
`;
