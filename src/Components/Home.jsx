import React, { Component } from "react";
import ArticleList from "./Articles/ArticleList";
import * as api from "../api";
import "./Home.css";

class Home extends Component {
  state = { newest3: [] };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2 className="newest3">Newest Articles</h2>
        <ArticleList className="newestList" articles={this.state.newest3} />
        <h2>Top Rated</h2>
        highest voted 3 articles full size
      </div>
    );
  }

  componentDidMount() {
    api.fetchArticles(undefined, "created_at", 3).then(res => {
      this.setState({ newest3: res });
    });
  }
}

export default Home;
