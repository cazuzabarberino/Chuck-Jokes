import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: 900px;
  width: calc(100% - 32px);
  border-radius: 8px;
  margin: 16px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 4px;
  overflow: hidden;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
`;

export const JokeWrapper = styled.div`
  padding: 16px;
`;

export const NavigationButtons = styled.div`
  background: ${({ theme }) => theme.secondary};
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: background 0.2s;
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  padding: 12px 0;
  font-weight: bold;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: ${({ theme }) => shade(0.2, theme.secondary)};
    }
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

export const JokeArea = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 16px;
`;

interface JokeViewProps {
  height: number;
}

export const JokeView = styled.button<JokeViewProps>`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${({ height }) => height}px;
  min-height: 48px;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  background: none;
  border: none;
  color: ${({ theme }) => theme.font};
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
  position: absolute;
  font-size: 24px;
  text-align: left;
`;

export const JokeOptions = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    display: grid;
    place-content: center;

    + button {
      margin-left: 8px;
    }
  }

  > div {
    display: flex;
  }

  svg {
    cursor: pointer;
    width: 32px;
    height: 32px;
    transition: 0.2s;
    @media (hover: hover) and (pointer: fine) {
      :hover {
        color: ${({ theme }) => theme.secondary};
        transform: scale(1.1);
      }
    }
  }
`;

const leftSwing = keyframes`
  50%,
  100% {
    transform: translateX(95%);
  }
`;

const rightSwing = keyframes`
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Loading = styled.div`
  font-size: 24px;
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  padding: 16px 0;

  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary};
  }

  div:nth-of-type(1) {
    transform: translateX(-100%);
    animation: ${leftSwing} 0.5s ease-in alternate infinite;
  }

  div:nth-of-type(3) {
    transform: translateX(-95%);
    animation: ${rightSwing} 0.5s ease-out alternate infinite;
  }
`;
