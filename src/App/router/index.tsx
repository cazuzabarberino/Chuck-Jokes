import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import { Content } from "./styles";

export const routes = {
  home: "/",
  explore: "/explore",
  favorites: "/favorites",
};

const Router: React.FC = () => {
  return (
    <HashRouter basename="">
      <Header />
      <Content>
        <Switch>
          <Route path={routes.explore} component={Explore} />
          <Route exact path={routes.home} component={Home} />
        </Switch>
      </Content>
    </HashRouter>
  );
};

export default Router;
