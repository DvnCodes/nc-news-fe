import React, { Component } from "react";
import { fetchArticle, fetchComments } from "../../api";
import Votes from "../Votes";

class Article extends Component {
  state = {
    article: {},
    comments: []
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
        <h2>Comments:</h2>
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
      </div>
    );
  }

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
      console.log(article);

      this.setState({ article });
    });
  };
}

export default Article;
