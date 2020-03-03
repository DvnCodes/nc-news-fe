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
    err: null,
    isLoading: true
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
            {this.state.isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <h1>Topics</h1>

                <TopicList topics={this.state.topics} />
                <div>
                  {this.props.topic ? (
                    <>
                      {this.props.user ? (
                        <PostArticleToTopic
                          topic={this.props.topic}
                          user={this.props.user}
                          addArticle={this.addArticle}
                        />
                      ) : (
                        <h3>Log in to post an article</h3>
                      )}
                      <ArticleList articles={this.state.articles} />
                    </>
                  ) : null}
                </div>
              </>
            )}
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
        this.setState({ articles, isLoading: false });
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
