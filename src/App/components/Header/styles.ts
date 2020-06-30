import styled from "styled-components";
import { transparentize, shade } from "polished";

interface NavigationProps {
  open: boolean;
}

export const Container = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 96px;
  width: 100%;
  padding: 0 24px;

  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.font)};

  @media (max-width: 900px) {
    transition: top 0.2s;
    top: ${({ open }) => (open ? 68 : 0)}px;
  }
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

    @media (max-width: 500px) {
      font-size: 32px;
    }
  }
`;

export const Navigation = styled.nav<NavigationProps>`
  @media (max-width: 900px) {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    background: ${({ theme }) => theme.primary};
  }

  > ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;

    @media (max-width: 900px) {
      grid-auto-flow: row;
    }
  }
`;

export const NavMenu = styled.button`
  display: none;
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.secondary};
    width: 32px;
    height: 32px;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MainNavButton = styled.button`
  position: relative;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;

  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  transition: background 0.2s;

  width: 100%;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: ${({ theme }) => shade(0.2, theme.secondary)};
    }
  }

  @media (max-width: 900px) {
    border-radius: 0px;
  }
`;

export const NavButton = styled(MainNavButton)`
  @media (min-width: 900px) {
    color: ${({ theme }) => theme.secondary};
    background: none;

    ::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.secondary};
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    :hover::before {
      transform: translate(-50%, 0) scaleX(1);
    }
    @media (hover: hover) and (pointer: fine) {
      :hover {
        background: none;
      }
    }
  }
`;
