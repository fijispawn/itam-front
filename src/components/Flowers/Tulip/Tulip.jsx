import React from "react";

import s from "./Tulip.module.css";

import { NavLink } from "react-router-dom";

const Tulip = () => {
  return (
    <div className={s.tulip}>
      <div className={s.text}>
        Тюльпа́н (лат. Túlipa) — род многолетних травянистых луковичных растений
        семейства Лилейные (Liliaceae), в современных систематиках включающий
        более 80 видов. Центр происхождения и наибольшего разнообразия видов
        тюльпанов — горы северного Ирана, Памиро-Алай и Тянь-Шань.
        <img
          className={s.img}
          src="https://cdn-icons-png.flaticon.com/512/616/616435.png"
        />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Tulip;
