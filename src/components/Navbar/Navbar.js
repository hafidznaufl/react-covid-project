import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import style from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={style.container}>
        <nav className={style.navbar}>
          <div>
            <h1 className={style.navbar__brand}>Covid Research.</h1>
          </div>
          <div className={style.navbar__content}>
            <div className={style.navbar__toggle} onClick={handleToggle}>
              {isOpen ? <FiX /> : <FiMenu />}
            </div>
            <div>
              <ul
                className={
                  isOpen ? style.navbar__list__open : style.navbar__list
                }
              >
                <li className={style.navbar__item}>Global</li>
                <li className={style.navbar__item}>Indonesia</li>
                <li className={style.navbar__item}>Provinsi</li>
                <li className={style.navbar__item}>About</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
