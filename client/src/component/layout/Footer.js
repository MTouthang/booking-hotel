import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <Container
        tag="footer"
        className="text-center bg-info text-white text-uppercase p-3 fixed-bottom"
        fluid
      >
        Develope with ❤ by Mang 2022
      </Container>
    </div>
  );
};

export default Footer;
