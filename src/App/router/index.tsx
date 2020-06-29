import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import { Content } from "./styles";
import { Switch, Route, Router as ReactRouterDOM } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const routes = {
  home: "/",
  explore: "/explore",
  favorites: "/favorites",
};

const Router: React.FC = () => {
  return (
    <ReactRouterDOM history={history}>
      <Header />
      <Content>
        <Switch>
          <Route path={"/Chuck-Jokes" + routes.explore} component={Explore} />
          <Route exact path={"/Chuck-Jokes" + routes.home} component={Home} />
        </Switch>
      </Content>
    </ReactRouterDOM>
  );
};

export default Router;
