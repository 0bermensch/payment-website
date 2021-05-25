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
      <div aria-label="Facebook icon">
        <i className="fab fa-facebook-square" />
      </div>
      <div aria-label="Twitter icon">
        <i className="fab fa-twitter" />
      </div>
      <div aria-label="LinkedIn icon">
        <i className="fab fa-linkedin" />
      </div>
    </div>
  </div>
);

export default Footer;
