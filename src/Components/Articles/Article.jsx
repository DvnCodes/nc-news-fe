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
        <h2 className="articleStamp">
          By {article.author} at {article.created_at}
        </h2>
        <p>{article.body}</p>
        <Toggle buttonText="Comments">
          <CommentList article_id={this.props.article_id} />
        </Toggle>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    api
      .postComment(
        this.state.comment,
        this.props.user,
        this.state.article.article_id
      )
      .then(({ comment }) => {
        this.setState(currentState => {
          const newComments = [comment, ...currentState.comments];
          return { comments: newComments };
        });
      });
  };

  componentDidMount() {
    this.getArticle();
    this.getComments();
  }
  getComments = () => {
    fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
  getArticle = () => {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default Article;
