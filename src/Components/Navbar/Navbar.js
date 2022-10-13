import React from "react";
import "./__Navbar.scss";
import { NavLink } from "react-router-dom";
import logoKasa from "./logo.png";

export default function Navbar() {
  return (
    <header>
      <NavLink to="/">
        {" "}
        <img
          src={logoKasa}
          alt="Logo de l'entreprise Kasa en rouge"
          className="logo__kasa"
        />{" "}
      </NavLink>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            {" "}
            <NavLink to="/"> Accueil </NavLink>{" "}
          </li>
          <li className="navigation__list__item">
            <NavLink to="/apropos"> A propos </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
