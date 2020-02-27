import React, { Component } from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import Votes from "../Votes";

class ArticleCard extends Component {
  render() {
    return (
      <li className="card">
        <div className="articleinfo">
          <Link to={`/articles/${this.props.article.article_id}`}>
            <h2>{this.props.article.title}</h2>
          </Link>
          <p>Topic: {this.props.article.topic}</p>
          <p>By: {this.props.article.author}</p>
          <p>Comments: {this.props.article.comment_count}</p>
        </div>
        <div className="articlecardvotes">
          <Votes content={this.props.article} type="article" />
        </div>
      </li>
    );
  }
}

export default ArticleCard;
