import React, { Component } from "react";
import * as api from "../../api";
import TopicList from "./TopicList";
import { Router } from "@reach/router";
import ArticleList from "../Articles/ArticleList";

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
      <div>
        <h1>Topics</h1>
        <TopicList topics={this.state.topics} />
        <Router>
          <ArticleList path=":topic" articles={this.state.articles} />
        </Router>
      </div>
    );
  }
}

export default Topics;
