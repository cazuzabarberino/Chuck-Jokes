import React from "react";
import { Container } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Created by Cazuza</p>
      <p>
        Powered by{" "}
        <a
          href="https://api.chucknorris.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          chucknorris.io
        </a>
      </p>
      <div>
        <a
          href="https://github.com/cazuzabarberino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cazuza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
