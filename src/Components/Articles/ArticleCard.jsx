import React, { Component } from "react";
import { Link } from "@reach/router";

import Votes from "../Votes";
import { fetchArticle } from "../../api";

class ArticleCard extends Component {
  state = {
    body: ""
  };
  componentDidMount() {
    fetchArticle(this.props.article.article_id).then(article => {
      this.setState({ body: article.body });
    });
  }

  render() {
    return (
      <li className="card">
        <Link to={`/articles/${this.props.article.article_id}`}>
          <h2>{this.props.article.title}</h2>
        </Link>
        <div className="articlepreview">
          <p>{this.state.body.slice(0, 150)}</p>
        </div>
        <div className="articleinfo">
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
