import React from "react";
import { Link } from "react-router-dom";
import { PageLinks } from "../";
import logo from "../../asset/shared/desktop/logo--white.svg";

const Footer = () => (
  <div className="footer">
    <Link to="/">
      <img className="footer__logo" src={logo} alt="PayAPI company logo" />
    </Link>
    <PageLinks />
    <div className="footer__socials">
      <a aria-label="Facebook icon">
        <i className="fab fa-facebook-square" />
      </a>
      <a aria-label="Twitter icon">
        <i className="fab fa-twitter" />
      </a>
      <a aria-label="LinkedIn icon">
        <i className="fab fa-linkedin" />
      </a>
    </div>
  </div>
);

export default Footer;
