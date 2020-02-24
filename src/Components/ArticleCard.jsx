import React, { Component } from "react";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  render() {
    return (
      <div>
        <Link to={`/articles/${this.props.article.article_id}`}>
          <li>
            <h2>{this.props.article.title}</h2>
            <p>Topic: {this.props.article.topic}</p>
            <p>By: {this.props.article.author}</p>
          </li>
        </Link>
      </div>
    );
  }
}

export default ArticleCard;
