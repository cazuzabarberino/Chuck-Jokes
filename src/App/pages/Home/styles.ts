import styled from "styled-components";
import chuckPhoto from "../../../Assets/chuck-photo.jpg";
import { shade } from "polished";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

  p {
    position: relative;
    z-index: 2;
    padding: 16px;
    font-size: 32px;
    text-align: center;

    span {
      font-size: 96px;
      font-family: "Pangolin", cursive;
    }

    a {
      color: ${({ theme }) => theme.font};
    }
  }

  button {
    position: relative;
    z-index: 2;
    font-size: 32px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 8px;
    padding: 8px 32px;
    transition: background 0.2s;

    :hover {
      background: ${({ theme }) => shade(0.2, theme.secondary)};
    }
  }

  /* div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${chuckPhoto});
    background-size: cover;
    background-position: top;

    ::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.primary};
      opacity: 0.9;
    }
  } */
`;
