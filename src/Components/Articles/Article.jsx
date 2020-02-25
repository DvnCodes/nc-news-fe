import React, { Component } from "react";
import { fetchArticle, fetchComments } from "../../api";
import Votes from "../Votes";
import Toggle from "../Toggle";
import * as api from "../../api";

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
          <br />
          {this.props.user ? (
            <form onSubmit={this.handleSubmit}>
              <textarea
                name=""
                id=""
                cols="100"
                rows="5"
                onChange={this.handleChange}
              ></textarea>
              <button>Post!</button>
            </form>
          ) : (
            <p>Log in to post comments</p>
          )}
          <ul>
            {this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <h3>{comment.author}</h3>
                  <Votes content={comment} type="comment" />
                  <p>{comment.body}</p>
                  <p>posted at: {comment.created_at}</p>
                </li>
              );
            })}
          </ul>
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
        console.log(comment);

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
