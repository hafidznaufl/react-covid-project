import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <nav className="navbar">
        <h1 className="navbar__brand">Covid Research.</h1>

        <div className="navbar__content">
          <div className="navbar__toggle" onClick={handleToggle}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
          <div>
            <ul className={isOpen ? "navbar__list__open" : "navbar__list"}>
              <li className="navbar__item">
                <Link to="/"> Global</Link>
              </li>
              <li className="navbar__item">
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li className="navbar__item">
                <Link to="/province">Province</Link>
              </li>
              <li className="navbar__item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
