import React, { Component } from "react";
import * as api from "../../api";

class PostArticleToTopic extends Component {
  state = { title: "", body: "" };
  render() {
    return (
      <div className="postArticle">
        <h3>Post Article: {this.props.topic}</h3>
        <form className="postArticleForm" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              required
            ></input>
          </label>
          <label>
            Article:
            <textarea
              name="body"
              type="text"
              onChange={this.handleChange}
              value={this.state.body}
              required
            ></textarea>
          </label>
          <div className="postArticleButtonContaner"></div>
          <button className="postArticleButton">
            <img
              src={require("../../images/plus.png")}
              width="25em"
              alt="post icon"
            ></img>
          </button>
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
    this.setState({ title: "", body: "" });
  };
  "";
}

export default PostArticleToTopic;
