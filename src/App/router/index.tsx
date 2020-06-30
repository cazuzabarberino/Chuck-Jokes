import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import { Content } from "./styles";
import Footer from "../components/Footer";

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
          <Route path={routes.explore + "/:jokeid?"} component={Explore} />
          <Route exact path={routes.home} component={Home} />
        </Switch>
      </Content>
      <Footer />
    </HashRouter>
  );
};

export default Router;
