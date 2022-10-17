import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  return (
    <header className={s.header}>
      <span className={s.title}>BLOOM CITY</span>
      <div className={s.menu}>
        <button className={s.button} onClick={handleDarkThemeClick}>
          COLOR-DARK
        </button>
        <button className={s.button} onClick={handleLightThemeClick}>
          COLOR-DEFAULT
        </button>
        <NavLink className={s.button} to="/about">
          <button>ABOUT</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
