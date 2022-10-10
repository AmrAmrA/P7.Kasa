import React from "react";
import "./__Navbar.scss";
import { Link } from 'react-router-dom'
import logoKasa from "./logo.png";

export default function Navbar() {
  return (
    <header>
      <img src={logoKasa} alt="Logo de l'entreprise Kasa" className="logo__kasa" />
      <nav className="navigation">
        <ul className="navigation__list">
           <Link to= "/"> <li className="navigation__list__item">  Accueil  </li> </Link>
           <Link to = "/apropos">  <li className="navigation__list__item"> A propos </li></Link>
        </ul>
      </nav>
    </header>
  );
}
