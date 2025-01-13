import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faBolt } from "@fortawesome/free-solid-svg-icons";
import Styles from "./nav.module.css";
import { SideCart } from "./SideCart";
const NavBar = () => {
 
  return (
    <header className={Styles.head}>
      <div>
        <FontAwesomeIcon className={Styles.homeWord} icon={faSignOutAlt} />
      </div>
      <h1>Store</h1>
      <div>
        <a href="s" className={Styles.homeWord}>home</a>
      </div>
      <SideCart/>
    </header>
  );
};
export default NavBar;
