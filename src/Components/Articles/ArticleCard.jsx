import React, { Component } from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import Votes from "../Votes";

class ArticleCard extends Component {
  render() {
    return (
      <div className="card">
        <li>
          <Link to={`/articles/${this.props.article.article_id}`}>
            <h2>{this.props.article.title} </h2>
          </Link>
          <p>Topic: {this.props.article.topic}</p>
          <p>By: {this.props.article.author}</p>
          <p>Comments: {this.props.article.comment_count}</p>
          <Votes content={this.props.article} type="article" />
        </li>
      </div>
    );
  }
}

export default ArticleCard;
