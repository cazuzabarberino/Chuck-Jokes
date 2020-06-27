import React from "react";
import Header from "../components/Header";
import { Content } from "./styles";
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
    </>
  );
};

export default Router;
