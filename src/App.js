import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Article from "./Components/Article";

import Topics from "./Components/Topics";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Articles path="/articles" />
        <Topics path="/topics" />
        <Home path="/home" />
        <Article path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
