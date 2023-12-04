import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="nav_bar">
      <div>
        <NavLink to="/work" className="title">
          Work
        </NavLink>
      </div>
      <div>
        <NavLink to="/work/shortbreak" className="title">
          Short
        </NavLink>
      </div>
      <div>
        <NavLink to="/work/longbreak" className="title">
          Long
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
