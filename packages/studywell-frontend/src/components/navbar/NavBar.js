import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const curURL = window.location.href;
  const pathSegments = curURL.split("/");
  const userId = pathSegments[pathSegments.length - 1];
  console.log(userId);

  return (
    <div className="nav_bar">
      <div>
        <NavLink to={`/work/${userId}`} className="title">
          Work
        </NavLink>
      </div>
      <div>
        <NavLink to={`/work/shortbreak/${userId}`} className="title">
          Short
        </NavLink>
      </div>
      <div>
        <NavLink to={`/work/longbreak/${userId}`} className="title">
          Long
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
