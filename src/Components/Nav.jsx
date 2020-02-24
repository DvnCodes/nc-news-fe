import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/home">home</Link>
      <Link to="/topics">topics</Link>
      <Link to="/articles">articles</Link>
    </nav>
  );
};

export default Nav;
