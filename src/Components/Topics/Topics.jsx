import React, { Component } from "react";
import * as api from "../../api";
import TopicList from "./TopicList";
import { Router } from "@reach/router";
import ArticleList from "../Articles/ArticleList";
import "./Topics.css";
import ErrorPage from "../ErrorPage";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
    err: null
  };

  getTopics = () => {
    api
      .fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        return console.log(err.response);
      });
  };
  getArticles = () => {
    api
      .fetchArticles(this.props.topic, null, null, null)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        const { status, data } = err.response;
        this.setState({ err: { msg: data.msg, status: status } });
      });
  };
  componentDidMount() {
    this.getTopics();
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      this.getArticles();
    }
  }

  render() {
    return (
      <div className="topics">
        {this.state.err === null ? (
          <>
            <h1>Topics</h1>
            <TopicList topics={this.state.topics} />
            <div>
              {this.props.topic ? (
                // <Router className="topicsArticleList">
                <ArticleList articles={this.state.articles} />
              ) : null}
              {/* </Router> */}
            </div>
          </>
        ) : (
          <ErrorPage err={this.state.err} />
        )}
      </div>
    );
  }
}

export default Topics;
