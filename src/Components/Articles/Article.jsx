import React, { Component } from "react";
import { fetchArticle, deleteArticle } from "../../api";
import Toggle from "../Toggle";
import CommentList from "../Comments/CommentList";
import "./Article.css";
import ErrorPage from "../ErrorPage";
import { Link } from "@reach/router";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    comment: "",
    err: null,
    isLoading: true
  };
  componentDidMount() {
    this.getArticle();
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {this.state.err === null ? (
              <main>
                <h1>{article.title}</h1>
                <article className="body">{article.body}</article>
                <div className="articleStamp">
                  By {article.author + " "}
                  {new Date(Date.parse(article.created_at)).toLocaleString()}
                </div>

                {this.props.user === article.author ? (
                  <Link to="/articles">
                    <button onClick={this.handleDelete}>Delete</button>
                  </Link>
                ) : null}

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
        )}
      </div>
    );
  }

  handleDelete = () => {
    deleteArticle(this.props.article_id);
  };

  getArticle = () => {
    if (isNaN(this.props.article_id)) {
      this.setState({
        err: { msg: "Bad Request", status: "400" },
        isLoading: false
      });
    } else if (this.props.article_id > 999999999) {
      this.setState({
        err: { msg: "Not Found", status: "404" },
        isLoading: false
      });
    } else {
      fetchArticle(this.props.article_id)
        .then(article => {
          this.setState({ article, isLoading: false });
        })
        .catch(err => {
          const { status, data } = err.response;
          this.setState({
            err: { msg: data.msg, status: status },
            isLoading: false
          });
        });
    }
  };
}

export default Article;
