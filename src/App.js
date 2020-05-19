import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Articles/Article";
import Topics from "./Components/Topics/Topics";
import Home from "./Components/Home";
import React from "react";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  const [user, login] = React.useState(undefined);

  return (
    <div className="App">
      <Header login={login} user={user} />
      <main>
        <Router>
          <Articles path="/articles" />
          <Topics path="/topics" />
          <Topics path="topics/:topic" user={user} />
          <Home path="/" />
          <Home path="/home" />
          <Article path="articles/:article_id" user={user} />
          <ErrorPage default err={{ msg: "Not Found", status: "404" }} />
        </Router>
      </main>
    </div>
  );
};

export default App;
