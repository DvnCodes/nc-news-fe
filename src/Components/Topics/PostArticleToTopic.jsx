import React, { Component } from "react";
import * as api from "../../api";

class PostArticleToTopic extends Component {
  state = { title: "", body: "" };
  render() {
    return (
      <div>
        <p>Post Article To: {this.props.topic}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label>
            Article:
            <input
              name="body"
              type="text"
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <button>Post</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const article = {
      article: {
        title: this.state.title,
        body: this.state.body,
        topic: this.props.topic,
        author: this.props.user
      }
    };
    api.postArticle(article).then(article => {
      this.props.addArticle(article);
    });
  };
}

export default PostArticleToTopic;
