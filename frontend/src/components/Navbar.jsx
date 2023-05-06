import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="navbar-logo">
            <NavLink className={"nav-link"} to="/">
                <span className="link-text logo-text">ORINIX</span>
                <img src="/site.png" alt="logo" />
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/orinix">
            <img src="/adresse.png" className="nav-img" alt="icon" />
            <span className="link-text">Orinix</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/iir">
            <img src="/adresse.png" className="nav-img" alt="icon" />
            <span className="link-text">Institut Iternational des Rêves</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/a_propos">
            <img src="/adresse.png" className="nav-img" alt="icon" />
            <span className="link-text">A propos</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/contact">
            <img src="/adresse.png" className="nav-img" alt="icon" />
            <span className="link-text">contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
