import React from "react";
import "./icon.scss";
import sprite from "./sprite.svg";
const url = "sprite.svg";
const Icon = props => (
  <i className={`icon icon-${props.icon}`}>
    <svg viewBox="0 0 16 16">
      <use xlinkHref={`${sprite}#icon-${props.icon}`} />
    </svg>
  </i>
);

export default Icon;
