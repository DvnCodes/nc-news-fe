import React, { Component } from "react";
import ArticleList from "./ArticleList";
import * as api from "../api";

class Articles extends Component {
  state = {
    articles: [],
    topic: ""
  };

  getArticles = topic => {
    api
      .fetchArticles(this.props.location.search.split("=")[1])
      .then(articles => {
        this.setState({ articles });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default Articles;
