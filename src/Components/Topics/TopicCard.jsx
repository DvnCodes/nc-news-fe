import React, { Component } from "react";
import { Link } from "@reach/router";

class TopicCard extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to={`/topics/${this.props.topic.slug}`}>
            <h2>{this.props.topic.slug}</h2>
          </Link>

          <p>{this.props.topic.description}</p>
        </li>
      </div>
    );
  }
}

export default TopicCard;
