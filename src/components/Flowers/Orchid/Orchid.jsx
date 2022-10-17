import React from "react";

import s from "./Orchid.module.css";

import { NavLink } from "react-router-dom";

const Orchid = () => {
  return (
    <div className={s.orchid}>
      <div className={s.text}>
        Орхи́дные, или Ятры́шниковые, также Орхиде́и (лат. Orchidáceae) —
        крупнейшее семейство однодольных растений. Более чем для 10 %
        представителей семейства характерен CAM-фотосинтез. Орхидные —
        древнее семейство, появившееся в позднемеловую эпоху.
        <img
          className={s.img}
          src="https://cdn-icons-png.flaticon.com/512/4215/4215010.png"
        />
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
    </div>
  );
};

export default Orchid;
