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
          changePage={this.changePage}
        />
        <div className="pageButtons">
          {this.state.articles.length < 10 ? null : (
            <button onClick={() => this.changePage("next")}>NEXT</button>
          )}
          <span className="pageNum"> {this.state.page}</span>
          {this.state.page > 1 ? (
            <button onClick={() => this.changePage("prev")}>PREV</button>
          ) : null}
        </div>
      </div>
    );
  }
  getArticles = (topic, sort, limit, p) => {
    api
      .fetchArticles(topic, sort, limit, p)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        return console.log(err.response);
      });
  };

  changePage = page => {
    if (page === "reset") {
      this.setState({ page: 1 });
    } else {
      const navigateToPage = this.state.page + (page === "next" ? 1 : -1);
      this.getArticles(null, null, null, navigateToPage);
      this.setState({ page: navigateToPage });
    }
  };
}

export default Articles;
