import React from "react";
import { Link } from "react-router-dom";
import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
      <Link to={"/"} style={{ textDecoration: "none" }} className="nav_link">
        Home
      </Link>
      <Link style={{ textDecoration: "none" }} className="nav_link">
        Add Todo
      </Link>
      <Link
        to={"/login"}
        style={{ textDecoration: "none" }}
        className="nav_link"
      >
        LogIn
      </Link>
      <Link
        to={"/signup"}
        style={{ textDecoration: "none" }}
        className="nav_link"
      >
        SignUp
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#f50057" }}
        className="nav_link"
      >
        Logout
      </Link>
    </div>
  );
};
export default Navbar;
