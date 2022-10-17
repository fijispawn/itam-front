import React from "react";

import s from "./Peony.module.css";

import { NavLink } from "react-router-dom";

const Peony = () => {
  return (
    <div className={s.peony}>
      <div className={s.text}>
        Пио́н (лат. Paeónia) — род травянистых многолетников и листопадных
        кустарников (древовидные пионы). Единственный род семейства Пионовые
        (Paeoniaceae), ранее род относили к семейству лютиковых (Ranunculaceae).
        Пионы цветут в конце весны, ценятся садоводами за пышную листву,
        эффектные цветы и декоративные плоды (у некоторых видов).
        <img
          className={s.img}
          src="https://cdn-icons-png.flaticon.com/512/8263/8263437.png"
        />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Peony;
