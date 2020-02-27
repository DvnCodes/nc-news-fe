import React, { Component } from "react";
import { Link } from "@reach/router";

class TopicCard extends Component {
  render() {
    return (
      <Link to={`/topics/${this.props.topic.slug}`}>
        <div className="topicCard">
          <li>
            <h2>{this.props.topic.slug}</h2>
            <p>{this.props.topic.description}</p>
          </li>
        </div>
      </Link>
    );
  }
}

export default TopicCard;
