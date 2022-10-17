import React from "react";

import s from "./Mimosa.module.css";

import { NavLink } from "react-router-dom";

const Mimosa = () => {
  return (
    <div className={s.mimosa}>
      <div className={s.text}>
        Мимо́за (лат. Mimosa) — род цветковых растений семейства Бобовые
        (Fabaceae). Ранее это растение помещали в ныне расформированное
        семейство Мимозовые.Род составляют травы, кустарники или средней
        величины деревья с двоякоперистыми листьями. Число частей в цветке
        четверное, реже 3 и 6.
        <img
          className={s.img}
          src="https://cdn-icons-png.flaticon.com/512/185/185793.png"
        />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Mimosa;
