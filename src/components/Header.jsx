import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary pt-3 pb-3">
      <nav className="container d-flex gap-5">
        <NavLink className="text-white" to="/">
          Home
        </NavLink>
        <NavLink className="text-white" to="/business">
          Business
        </NavLink>
        <NavLink className="text-white" to="/entertainment">
          Entertainment
        </NavLink>
        <NavLink className="text-white" to="/general">
          General
        </NavLink>
        <NavLink className="text-white" to="/health">
          Health
        </NavLink>
        <NavLink className="text-white" to="/science">
          Science
        </NavLink>
        <NavLink className="text-white" to="/sports">
          Sports
        </NavLink>
        <NavLink className="text-white" to="/technology">
          Technology
        </NavLink>
      </nav>
    </header>
  );
};

export default React.memo(Header);
