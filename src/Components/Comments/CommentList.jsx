import React, { Component } from "react";
import Votes from "../Votes";
import * as api from "../../api";

class CommentList extends Component {
  state = {
    article: {},
    comments: [],
    comment: ""
  };
  render() {
    return (
      <div>
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
                {comment.author === this.props.user ? (
                  <button onClick={() => console.log("delete comment")}>
                    Delete
                  </button>
                ) : (
                  <Votes content={comment} type="comment" />
                )}

                <p>{comment.body}</p>
                <p>posted at: {comment.created_at}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    api.fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default CommentList;
