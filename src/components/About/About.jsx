import React from "react";
import { NavLink } from "react-router-dom";

import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet
        proin fermentum leo vel orci porta. Nunc non blandit massa enim nec.
        Cursus metus aliquam eleifend mi in. Et tortor consequat id porta.
        Nullam non nisi est sit. Turpis massa sed elementum tempus. Et tortor
        consequat id porta nibh venenatis cras. Diam quis enim lobortis
        scelerisque fermentum dui faucibus in ornare. Eget lorem dolor sed
        viverra ipsum. Elementum curabitur vitae nunc sed velit dignissim. Augue
        interdum velit euismod in pellentesque massa placerat. Massa placerat
        duis ultricies lacus sed turpis tincidunt. Nisl nisi scelerisque eu
        ultrices vitae auctor. Bibendum arcu vitae elementum curabitur vitae
        nunc sed velit dignissim. Tortor dignissim convallis aenean et tortor
        at. Aliquam ultrices sagittis orci a scelerisque purus semper eget.
        Aliquet risus feugiat in ante metus dictum at tempor commodo. Praesent
        elementum facilisis leo vel fringilla est ullamcorper. Sit amet aliquam
        id diam maecenas ultricies mi. Cum sociis natoque penatibus et magnis.
        Elit duis tristique sollicitudin nibh. Enim blandit volutpat maecenas
        volutpat blandit aliquam. In pellentesque massa placerat duis ultricies.
        Quam vulputate dignissim suspendisse in est ante in. Vulputate ut
        pharetra sit amet. Ultrices gravida dictum fusce ut placerat orci nulla
        pellentesque.
      </div>
      <NavLink to="/" className={s.back}>
        BACK
      </NavLink>
      {/* <img src = 'https://cs10.pikabu.ru/post_img/big/2019/04/01/0/1554068685186386164.jpg'/> */}
    </div>
  );
};

export default About;
