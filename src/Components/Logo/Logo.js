import React from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={logo} className="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
