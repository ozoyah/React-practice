import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="navitems">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/newsletter">Newsletter</Link>
      </div>
    </div>
  );
};

export default Navbar;
