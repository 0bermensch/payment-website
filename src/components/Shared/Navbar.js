import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PageLinks, Button } from "../";
import logo from "../../asset/shared/desktop/logo.svg";
import open from "../../asset/shared/mobile/menu.svg";
import close from "../../asset/shared/mobile/close.svg";

const Navbar = () => {
  const [navDeployed, setNavDeployed] = useState(false);
  const navBtn = useRef();

  const handleMobileNavClose = () => {
    let mobileNavLinks = [...document.querySelectorAll(".page__link")].slice(
      3,
      6
    );
    let linksPlusBtn = mobileNavLinks.concat(
      document.querySelectorAll(".btn--pink")[1]
    );

    linksPlusBtn.forEach((item) =>
      item.addEventListener("click", () => {
        closeAll();
      })
    );
  };

  useEffect(() => {
    handleMobileNavClose();
  });

  const handleNavOpen = () => {
    navBtn.current.classList.add("change");
  };

  const handleNavClose = () => {
    setTimeout(function () {
      navBtn.current.classList.remove("change");
    }, 850);
  };

  const closeAll = () => {
    handleNavClose();
    setNavDeployed(false);
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={closeAll}>
        <img className="navbar__logo" src={logo} alt="PayAPI company logo" />
      </Link>
      <div className="navbar__links">
        <PageLinks />
      </div>
      <Button text="Schedule a Demo" href="/contact" color="pink" />
      <div
        className={`navbar__links--mobile ${navDeployed ? "deployed" : ""}`}
        onClick={handleMobileNavClose}
      >
        <hr />
        <PageLinks />
        <Button text="Schedule a Demo" href="/contact" color="pink" />
      </div>
      <div
        ref={navBtn}
        className="navbar__links--mobile-btn"
        aria-label="Button for mobile menu deployment"
        onClick={() => setNavDeployed(!navDeployed)}
      >
        <img
          className="open"
          src={open}
          alt="Hamburger icon"
          onClick={handleNavOpen}
        />
        <img
          className={`close ${!navDeployed ? "spin" : ""}`}
          src={close}
          alt="X shape"
          onClick={handleNavClose}
        />
      </div>
    </div>
  );
};

export default Navbar;
