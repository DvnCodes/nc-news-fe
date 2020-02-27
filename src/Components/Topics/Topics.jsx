import React, { Component } from "react";
import * as api from "../../api";
import TopicList from "./TopicList";
import { Router } from "@reach/router";
import ArticleList from "../Articles/ArticleList";
import "./Topics.css";

class Topics extends Component {
  state = {
    topics: [],
    articles: []
  };

  getTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };

  componentDidMount() {
    this.getTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      console.log("if.......");
      api.fetchArticles(this.props.topic).then(articles => {
        this.setState({ articles });
      });
    }
  }

  render() {
    return (
      <div className="topics">
        <h1>Topics</h1>
        <TopicList topics={this.state.topics} />
        <div>
          <Router className="topicsArticleList">
            <ArticleList path=":topic" articles={this.state.articles} />
          </Router>
        </div>
      </div>
    );
  }
}

export default Topics;
