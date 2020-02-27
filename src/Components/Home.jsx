import React, { Component } from "react";
import ArticleList from "./Articles/ArticleList";
import * as api from "../api";
import "./Home.css";

class Home extends Component {
  state = { newest3: [], top3: [] };
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <h2 className="newest3">Newest Articles</h2>
        <div className="homelist">
          <ArticleList articles={this.state.newest3} />
        </div>
        <h2>Top Rated</h2>
        <div className="homelist">
          <ArticleList className="homelist" articles={this.state.top3} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    api.fetchArticles(undefined, "created_at", 3).then(res => {
      this.setState({ newest3: res });
    });
    api.fetchArticles(undefined, "votes", 3).then(res => {
      this.setState({ top3: res });
    });
  }
}

export default Home;
