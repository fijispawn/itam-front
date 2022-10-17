import React from "react";

import s from "./Content.module.css";

import { Link } from "react-router-dom";

const mockData = [
  {
    src: "https://i.pinimg.com/564x/ed/e0/59/ede059c95b7f715afddec367a8fbc3a3.jpg",
    title: "Тюльпан",
    page: "/tulip/",
  },
  {
    src: "https://i.pinimg.com/564x/0d/bf/37/0dbf3744256d99962a73aa76b876bced.jpg",
    title: "Лаванда",
    page: "/lavanda/",
  },
  {
    src: "https://i.pinimg.com/564x/aa/4f/ae/aa4faec37a00e18481ece92fffce267d.jpg",
    title: "Роза",
    page: "/rose/",
  },
  {
    src: "https://i.pinimg.com/564x/ba/75/7d/ba757d3b7191a25bf45eb08c25f30772.jpg",
    title: "Мимоза",
    page: "/mimosa/",
  },
  {
    src: "https://i.pinimg.com/564x/25/04/7c/25047cc3e5a44d4775496784bf98c526.jpg",
    title: "Пион",
    page: "/peony/",
  },
  {
    src: "https://i.pinimg.com/564x/41/57/c6/4157c69647655a0c61b489e49e30c560.jpg",
    title: "Орхидея",
    page: "/orchid/",
  },
];

const ItemComponent = (props) => {
  const { src, title, page = "/" } = props;

  return (
    <div className={s.item}>
      <Link to={page} className={s.item}>
        <img className={s.img} src={src} alt={title} />
      </Link>
      <span className={s.title}>{title}</span>
    </div>
  );
}

const Content = () => {
  return (
    <div className={s.content}>
      {mockData.map((el, i) => (
        <ItemComponent {...el} key={i} />
      ))}
    </div>
  );
};

export default Content;
