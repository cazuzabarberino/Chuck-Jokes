import React from "react";
import {
  Container,
  Navigation,
  NavButton,
  MainNavButton,
  Title,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        <img
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          alt=""
        />
        <h1>Chuck Jokes</h1>
      </Title>

      <Navigation>
        <ul>
          <li>
            <NavButton>Favorites</NavButton>
          </li>
          <li>
            <MainNavButton>Explore Jokes</MainNavButton>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Header;
