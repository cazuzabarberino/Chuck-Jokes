import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import { Content } from "./styles";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      {/* <Footer /> */}
    </>
  );
};

export default Router;
