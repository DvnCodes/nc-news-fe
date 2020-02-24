import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Skimmit</h1>
        <Nav />
      </div>
    );
  }
}

export default Header;
