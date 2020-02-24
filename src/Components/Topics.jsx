import React, { Component } from "react";
import * as api from "../api";
import TopicList from "./TopicList";

class Topics extends Component {
  state = {
    topics: []
  };

  getTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <TopicList topics={this.state.topics} />
      </div>
    );
  }
}

export default Topics;
