import React, { Component } from "react";
import { fetchArticle } from "../../api";
import Toggle from "../Toggle";
import CommentList from "../Comments/CommentList";
import "./Article.css";
import ErrorPage from "../ErrorPage";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    comment: "",
    err: null
  };
  componentDidMount() {
    this.getArticle();
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        {this.state.err === null ? (
          <main>
            <h1>{article.title}</h1>
            <article className="body">{article.body}</article>
            <div className="articleStamp">
              By {article.author + " "}
              {new Date(Date.parse(article.created_at)).toLocaleString()}
            </div>
            <Toggle buttonText="Comments">
              <CommentList
                article_id={this.props.article_id}
                user={this.props.user}
              />
            </Toggle>
          </main>
        ) : (
          <ErrorPage err={this.state.err} />
        )}
      </div>
    );
  }

  getArticle = () => {
    if (isNaN(this.props.article_id)) {
      this.setState({ err: { msg: "Not Found", status: "404" } });
    } else if (this.props.article_id > 999999999) {
      this.setState({ err: { msg: "Not Found", status: "404" } });
    } else {
      fetchArticle(this.props.article_id)
        .then(article => {
          this.setState({ article });
        })
        .catch(err => {
          const { status, data } = err.response;
          this.setState({ err: { msg: data.msg, status: status } });
        });
    }
  };
}

export default Article;
