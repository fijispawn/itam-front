import React from "react";

import s from "./Rose.module.css";

import { NavLink } from "react-router-dom";

const Rose = () => {
  return (
    <div className={s.rose}>
      <div className={s.text}>
        Ро́за — собирательное название видов и сортов представителей рода
        Шипо́вник (лат. Rósa), выращиваемых человеком и растущих в дикой природе.
        Бо́льшая часть сортов роз получена в результате длительной селекции путём
        многократных повторных скрещиваний и отбора. Некоторые сорта являются
        формами дикорастущих видов.
        <img
          className={s.img}
          src="https://cdn-icons-png.flaticon.com/512/5573/5573304.png"
        />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Rose;
