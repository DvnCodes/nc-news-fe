import React, { Component } from "react";
import Votes from "../Votes";
import * as api from "../../api";
import "./CommentList.css";

class CommentList extends Component {
  state = {
    article: {},
    comments: [],
    comment: ""
  };
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
              <li key={comment.comment_id}>
                {comment.author === this.props.user ? (
                  <button
                    onClick={() => {
                      return this.removeComment(comment.comment_id);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <Votes content={comment} type="comment" />
                )}
                <p>{comment.body}</p>

                <p className="commentStamp">
                  {new Date(Date.parse(comment.created_at)).toLocaleString()} by{" "}
                  {comment.author}
                </p>
              </li>
            );
          })}
        </ul>
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

  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    api.fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments });
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
  getComments = () => {
    api.fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default CommentList;
