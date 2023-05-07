import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mainSelector, setMainSelector] = useState(null);
  const [linkTextSelector, setLinkTextSelector] = useState(null);
  const [navbarSelector, setNavbarSelector] = useState(null);
  
  

  useEffect(() => {
    setMainSelector(document.querySelector("#container"));
    setLinkTextSelector(document.querySelectorAll(".link-text"));
    setNavbarSelector(document.querySelector("#navbar"));
  }, []);


  const handleMouseEnter = () => {
    linkTextSelector.forEach((item) => {
      item.classList.remove("display-none");
      item.classList.add("display-inline");
    });
      navbarSelector.classList.remove("normal-width");
      navbarSelector.classList.add("max-width-hover");
    mainSelector.classList.add("blur");
  }

  const handleMouseLeave = () => {
    linkTextSelector.forEach((item) => {
      item.classList.remove("display-inline");
      item.classList.add("display-none");
    });
      navbarSelector.classList.remove("max-width-hover");
      navbarSelector.classList.add("normal-width");
    mainSelector.classList.remove("blur");
  }

  const handleLinkClick = () => {
      linkTextSelector.forEach((item) => {
        item.classList.remove("display-inline");
        item.classList.add("display-none");
      });
      navbarSelector.classList.remove("max-width-hover");
      navbarSelector.classList.add("normal-width");
      mainSelector.classList.remove("blur");
  }

  return (
    <div className="navbar normal-width" id="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul className="navbar-nav">
        <li className="nav-item navbar-logo">
            <NavLink className={"nav-link nav-link-logo"} to="/" onClick={handleLinkClick}>
                <span className="link-text logo-text display-none">ONIRIX</span>
                <img src="/assets/logo/logo-partial.svg" alt="logo" />
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/prediction" onClick={handleLinkClick}>
            <img src="/assets/icons/predict-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Onirix</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/iir" onClick={handleLinkClick}>
            <img src="/assets/icons/iir-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Institut Iternational des Rêves</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/a_propos" onClick={handleLinkClick}>
            <img src="/assets/icons/about-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">A propos</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/contact" onClick={handleLinkClick}>
            <img src="/assets/icons/contact-white.svg" className="nav-img" alt="icon" />
            <span className="link-text display-none">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
