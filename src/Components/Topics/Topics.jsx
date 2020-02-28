import React, { Component } from "react";
import * as api from "../../api";
import TopicList from "./TopicList";
import ArticleList from "../Articles/ArticleList";
import "./Topics.css";
import ErrorPage from "../ErrorPage";
import PostArticleToTopic from "./PostArticleToTopic";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
    err: null
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
                <>
                  {this.props.user ? (
                    <PostArticleToTopic
                      topic={this.props.topic}
                      user={this.props.user}
                      addArticle={this.addArticle}
                    />
                  ) : (
                    <p>Log in to post an article</p>
                  )}
                  <ArticleList articles={this.state.articles} />
                </>
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

  addArticle = article => {
    this.setState(currentState => {
      const newArticles = [article, ...currentState.articles];
      return { articles: newArticles };
    });
  };
}

export default Topics;
