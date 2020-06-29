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
import { useHistory } from "react-router";
import { routes } from "../../router";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { push } = useHistory();

  const toggleMenu = useCallback(() => {
    setMenuOpen((state) => !state);
  }, []);

  const goToHome = useCallback(() => push(routes.home), [push]);
  const goToExplore = useCallback(() => push(routes.explore), [push]);
  const goToFavorites = useCallback(() => push(routes.favorites), [push]);

  return (
    <Container open={isMenuOpen}>
      <Title onClick={goToHome}>
        <img
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          alt=""
        />
        <h1>Chuck Jokes</h1>
      </Title>

      <Navigation open={isMenuOpen}>
        <ul>
          <li>
            <NavButton onClick={goToFavorites}>Favorites</NavButton>
          </li>
          <li>
            <MainNavButton onClick={goToExplore}>Explore Jokes</MainNavButton>
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
