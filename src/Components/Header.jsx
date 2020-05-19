import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import * as api from "../api";

const Header = (props) => {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    api.fetchUsers().then((res) => {
      setUsers(res);
      setUser(res[0].username);
    });
  }, []);

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
        {!props.user ? (
          <div className="loginContainer">
            <img
              src={require("../images/user.png")}
              width="25em"
              alt="user icon"
            ></img>
            <form
              onSubmit={() => {
                props.login(user);
              }}
            >
              <select
                onChange={(e) => {
                  e.preventDefault();
                  setUser(e.target.value);
                }}
              >
                {users.map((user) => {
                  return <option>{user.username}</option>;
                })}
              </select>
              <button>Login</button>
            </form>
          </div>
        ) : (
          <p>Logged in as {props.user}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
