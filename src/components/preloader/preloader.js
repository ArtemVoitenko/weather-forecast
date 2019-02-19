import React from "react";
import preloader from "./preloader.gif";
import "./preloader.css";

const Preloader = () => {
  return <img className="preloader-image" src={preloader} alt="preloader" />;
};
export default Preloader;
