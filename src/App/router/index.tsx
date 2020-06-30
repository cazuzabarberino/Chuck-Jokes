import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadFavorites } from "../../redux/Jokes/actions";
import { HashRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Explore from "../pages/Explore";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import { Content } from "./styles";

export const routes = {
  home: "/",
  explore: "/explore",
  favorites: "/favorites",
};

const Router: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <HashRouter basename="">
      <Header />
      <Content>
        <Switch>
          <Route path={routes.explore + "/:jokeid?"} component={Explore} />
          <Route path={routes.favorites} component={Favorites} />
          <Route exact path={routes.home} component={Home} />
        </Switch>
      </Content>
      <Footer />
    </HashRouter>
  );
};

export default Router;
