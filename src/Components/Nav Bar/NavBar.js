import React from "react";
import styles from "./NavBar.module.css";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AppsTwoToneIcon from "@mui/icons-material/AppsTwoTone";

function NavBar() {
  return (
    <nav>
      <ul className={styles.NavContainer}>
        <div className={styles.NavListPartOne}>
          <img
            height={20}
            src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png"
            alt="Uber Logo"
          />
          <li className={styles.NavListContainer}>
            Company <ExpandMoreRoundedIcon />{" "}
          </li>
          <li className={styles.NavListContainer}>Safety</li>
          <li className={styles.NavListContainer}>Help</li>
        </div>
        <div className={styles.NavListPartTwo}>
          <li className={styles.NavListContainer}>
            <LanguageRoundedIcon /> EN
          </li>
          <li className={styles.NavListContainer}>
            <AppsTwoToneIcon /> Products
          </li>
          <li className={styles.NavListContainer}>Login</li>
          <li className={styles.NavListSignupContainer}>Sign up</li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
