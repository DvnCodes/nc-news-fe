import React, { Component } from "react";
import ArticleList from "./ArticleList";
import * as api from "../../api";
import "./Articles.css";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    page: 1
  };

  getArticles = (topic, sort, limit, p) => {
    api.fetchArticles(topic, sort, limit, p).then(articles => {
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
        <div className="pageButtons">
          <button onClick={() => this.changePage("next")}>NEXT</button>
          <button onClick={() => this.changePage("prev")}>PREV</button>
        </div>
      </div>
    );
  }

  changePage = direction => {
    const navigateToPage = this.state.page + (direction === "next" ? 1 : -1);
    this.getArticles(null, null, null, navigateToPage);
    this.setState({ page: navigateToPage });
  };
}

export default Articles;
