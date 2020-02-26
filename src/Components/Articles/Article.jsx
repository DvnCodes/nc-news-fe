import React, { Component } from "react";
import { fetchArticle, fetchComments } from "../../api";
import Toggle from "../Toggle";
import * as api from "../../api";
import CommentList from "../Comments/CommentList";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    comment: ""
  };
  render() {
    const { article } = this.state;
    return (
      <div>
        <h1>{article.title}</h1>

        <article>{article.body}</article>
        <div className="articleStamp">
          By {article.author} at {article.created_at}
        </div>
        <Toggle buttonText="Comments">
          <CommentList
            article_id={this.props.article_id}
            user={this.props.user}
          />
        </Toggle>
      </div>
    );
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default Article;
