import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/topics">
        <span>Topics</span>
      </Link>
      <Link to="/articles">
        <span>Articles</span>
      </Link>
    </nav>
  );
};

export default Nav;
