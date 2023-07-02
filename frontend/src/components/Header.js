import React from "react";
import popcorn from "../assets/popcorn.gif";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="row">
      <div className="logo">
        {" "}
        <Link to="/">
          <img className="popcorn" src={popcorn} alt="popcorn" />
        </Link>
        <Link to="/" className="brand">
          WHATS POPPING
        </Link>
      </div>

      <Hamburger />
    </header>
  );
};

export default Header;
