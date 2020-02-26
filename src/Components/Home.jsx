import React, { Component } from "react";
import ArticleList from "./Articles/ArticleList";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Newest Articles</h2>
        newest 3 articles in a grid
        <h2>Top Rated This Week</h2>
        highest voted 3 articles full size
      </div>
    );
  }
}

export default Home;
