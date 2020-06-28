import styled from "styled-components";
import { transparentize, shade } from "polished";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 96px;
  width: 100%;
  padding: 0 24px;

  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.font)};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    margin-right: 8px;
  }

  > h1 {
    color: ${({ theme }) => theme.font};
    font-size: 48px;
    font-family: "Pangolin", cursive;
    font-weight: normal;
  }
`;

export const Navigation = styled.nav`
  > ul {
    list-style: none;
    display: flex;

    li + li {
      margin-left: 24px;
    }
  }
`;

export const NavButton = styled.button`
  border: none;
  background: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  :hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

export const MainNavButton = styled.button`
  border: none;
  background: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  transition: background 0.2s;

  :hover {
    background: ${({ theme }) => shade(0.2, theme.secondary)};
  }
`;
