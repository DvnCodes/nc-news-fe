import React, { Component } from "react";
import { Link } from "@reach/router";

class TopicCard extends Component {
  render() {
    return (
      <div>
        <Link to={`/articles?topic=${this.props.topic.slug}`}>
          <li>
            <h2>{this.props.topic.slug}</h2>
            <p>{this.props.topic.description}</p>
          </li>
        </Link>
      </div>
    );
  }
}

export default TopicCard;
