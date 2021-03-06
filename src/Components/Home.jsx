import React, { Component } from "react";
import ArticleList from "./Articles/ArticleList";
import * as api from "../api";

class Home extends Component {
  state = { newest3: [], top3: [], isLoading: true };
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <h3 className="newest3">Newest Articles</h3>
        <div className="homelist">
          {!this.state.isLoading ? (
            <ArticleList articles={this.state.newest3} />
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        <h3>Top Rated</h3>
        <div className="homelist">
          {!this.state.isLoading ? (
            <ArticleList className="homelist" articles={this.state.top3} />
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    api.fetchArticles(undefined, "created_at", 3).then((res) => {
      this.setState({ newest3: res });
    });
    api.fetchArticles(undefined, "votes", 3).then((res) => {
      this.setState({ top3: res, isLoading: false });
    });
  }
}

export default Home;
