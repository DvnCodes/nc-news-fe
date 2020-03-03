import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <img
            src={require("../images/northcoders-logo.png")}
            alt="logo"
            width="250px"
          />
          <h1>NEWS</h1>
          <Nav />
          {!this.props.user ? (
            <div className="loginContainer">
              <img
                src={require("../images/user.png")}
                width="25em"
                alt="user icon"
              ></img>
              <button onClick={this.props.login}>Login as cooljmessy</button>
            </div>
          ) : (
            <p>Logged in as {this.props.user}</p>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
