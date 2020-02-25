import React, { Component } from "react";
import Nav from "./Nav";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <img src={require("../northcoders-logo.png")} alt="" width="250px" />
          News
        </h1>
        <Nav />
        {!this.props.user ? (
          <button onClick={this.props.login}>Login as cooljmessy</button>
        ) : (
          <p>Logged in as {this.props.user}</p>
        )}
      </div>
    );
  }
}

export default Header;
