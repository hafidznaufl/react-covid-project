import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <h1 className={style.navbar__brand}>Covid Research.</h1>

        <div className={style.navbar__content}>
          <div className={style.navbar__toggle} onClick={handleToggle}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
          <div>
            <ul
              className={isOpen ? style.navbar__list__open : style.navbar__list}
            >
              <li className={style.navbar__item}>
                <Link to="/"> Global</Link>
              </li>
              <li className={style.navbar__item}>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li className={style.navbar__item}>
                <Link to="/province">Province</Link>
              </li>
              <li className={style.navbar__item}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
