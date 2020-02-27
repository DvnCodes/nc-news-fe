import React, { Component } from "react";
import { Link } from "@reach/router";

class TopicCard extends Component {
  render() {
    return (
      <div className="topicCard">
        <li>
          <Link to={`/topics/${this.props.topic.slug}`}>
            <h2>{this.props.topic.slug}</h2>
            <p>{this.props.topic.description}</p>
          </Link>
        </li>
      </div>
    );
  }
}

export default TopicCard;
