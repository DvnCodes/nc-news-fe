import React, { Component } from "react";
import { fetchArticle } from "../api";

class Article extends Component {
  state = {
    article: {},
    comments: [
      {
        comment_id: 44,
        author: "grumpy19",
        article_id: 1,
        votes: 4,
        created_at: "2017-11-20T08:58:48.322Z",
        body:
          "Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non."
      },
      {
        comment_id: 52,
        author: "jessjelly",
        article_id: 1,
        votes: 10,
        created_at: "2017-07-31T08:14:13.076Z",
        body:
          "Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum."
      }
    ]
  };
  render() {
    const { article } = this.state;
    return (
      <div>
        <h1>
          {article.title} Votes: {article.votes}
        </h1>
        <h2>
          By {article.author} at {article.created_at}
        </h2>
        <p>{article.body}</p>
        <h2>Comments:</h2>
        <ul>
          {this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.author}</h3>
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
  }

  getArticle = () => {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default Article;
