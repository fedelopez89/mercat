import React from "react";
import { Link } from "react-router-dom";
// Images
import logo from "./../../assets/mercat-black-2021.png";

const MainHeader = () => {
  return (
    <header>
      <Link to="/">
        <header style={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="background" style={{ width: "35vw" }} />
        </header>
      </Link>
    </header>
  );
};

export default MainHeader;
