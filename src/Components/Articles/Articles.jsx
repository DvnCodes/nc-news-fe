import React, { Component } from "react";
import ArticleList from "./ArticleList";
import * as api from "../../api";
import "./Articles.css";

class Articles extends Component {
  state = {
    articles: [],
    topic: ""
  };

  getArticles = (topic, sort) => {
    api.fetchArticles(topic, sort).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getArticles();
    }
  }

  render() {
    return (
      <div className="listbox">
        <h1>Articles</h1>
        <ArticleList
          articles={this.state.articles}
          getArticles={this.getArticles}
        />
      </div>
    );
  }
}

export default Articles;
