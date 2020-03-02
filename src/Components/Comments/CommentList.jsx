import React, { Component } from "react";
import Votes from "../Votes";
import * as api from "../../api";
import "./CommentList.css";

class CommentList extends Component {
  state = {
    article: {},
    comments: [],
    comment: "",
    limit: 10
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div className="CommentList">
        <br />
        {this.props.user ? (
          <form className="commentBox" onSubmit={this.handleSubmit}>
            <textarea
              required
              cols="50"
              rows="5"
              onChange={this.handleChange}
            ></textarea>
            <button className="postButton">Post!</button>
          </form>
        ) : (
          <p className="loginprompt">Log in to post comments</p>
        )}
        <ul>
          {this.state.comments.map(comment => {
            return (
              <li className="comment" key={comment.comment_id}>
                {comment.author === this.props.user ? (
                  <button
                    className="deleteCommentButton"
                    onClick={() => {
                      return this.removeComment(comment.comment_id);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <Votes content={comment} type="comment" />
                )}
                <div className="commentInfo">
                  <p className="commentBody">{comment.body}</p>
                  <p className="commentStamp">
                    {new Date(Date.parse(comment.created_at)).toLocaleString()}{" "}
                    by {comment.author}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="LoadMoreComments">
          {this.state.comments.length === 10 ? (
            <button onClick={this.loadMoreComments}>Load More</button>
          ) : null}
        </div>
      </div>
    );
  }
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    api
      .postComment(this.state.comment, this.props.user, this.props.article_id)
      .then(({ comment }) => {
        this.setState(currentState => {
          const newComments = [comment, ...currentState.comments];
          return { comments: newComments };
        });
      });
  };

  removeComment = (id, i) => {
    api.deleteComment(id);
    this.setState(currentState => {
      const newComments = [...currentState.comments].filter(comment => {
        return comment.comment_id !== id;
      });
      return { comments: newComments };
    });
  };
  getComments = limit => {
    api
      .fetchComments(this.props.article_id, limit)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => err);
  };
  loadMoreComments = () => {
    const newLimit = this.state.limit + 10;
    this.getComments(newLimit);
    this.setState({ limit: newLimit });
  };
}

export default CommentList;
