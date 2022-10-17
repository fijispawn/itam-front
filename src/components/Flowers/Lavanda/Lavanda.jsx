import React from "react";

import s from "./Lavanda.module.css";

import { NavLink } from "react-router-dom";

const Lavanda = () => {
  return (
    <div className={s.lavanda}>
      
      <div className={s.text}>

        Лава́нда (лат. Lavandula) — род растений семейства яснотковых (Lamiaceae
        или Labiatae). Включает примерно 47 видов. Произрастает на Канарских
        островах, в северной и восточной Африке, в Австралии, на юге Европы, в
        Аравии и в Индии. Культурные формы выращиваются в садах во всём мире.
        <img className = {s.img} src = 'https://cdn-icons-png.flaticon.com/512/1087/1087422.png' />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Lavanda;
