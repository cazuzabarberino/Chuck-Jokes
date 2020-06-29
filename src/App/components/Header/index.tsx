import React, { useState, useCallback } from "react";
import {
  Container,
  Navigation,
  NavButton,
  MainNavButton,
  Title,
  NavMenu,
} from "./styles";
import { FiMenu } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((state) => !state);
  }, []);

  return (
    <Container open={isMenuOpen}>
      <Title>
        <img
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          alt=""
        />
        <h1>Chuck Jokes</h1>
      </Title>

      <Navigation open={isMenuOpen}>
        <ul>
          <li>
            <NavButton>Favorites</NavButton>
          </li>
          <li>
            <MainNavButton>Explore Jokes</MainNavButton>
          </li>
        </ul>
      </Navigation>
      <NavMenu onClick={toggleMenu}>
        <FiMenu />
      </NavMenu>
    </Container>
  );
};

export default Header;
