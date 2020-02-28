import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Articles/Article";
import Topics from "./Components/Topics/Topics";
import Home from "./Components/Home";

import React, { Component } from "react";
import ErrorPage from "./Components/ErrorPage";

class App extends Component {
  state = { user: null };
  render() {
    return (
      <div className="App">
        <Header login={this.login} user={this.state.user} />
        <Router>
          <Articles path="/articles" />
          <Topics path="/topics" />
          <Topics path="topics/:topic" />
          <Home path="/" />
          <Home path="/home" />
          <Article path="articles/:article_id" user={this.state.user} />
          <ErrorPage default err={{ msg: "Not Found", status: "404" }} />
        </Router>
      </div>
    );
  }

  login = () => {
    this.setState({ user: "cooljmessy" });
  };
}

export default App;
